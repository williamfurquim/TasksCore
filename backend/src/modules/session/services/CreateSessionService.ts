import { UserRepository } from "../../user/repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class CreateSessionService {
  private userRepository = new UserRepository();

  async execute(data: { email: string; password: string }) {
    console.log("SERVICE CHAMADO");
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    // 🔍 DEBUG
    console.log("INPUT:", data.password);
    console.log("DB:", user.password);

    const passwordMatch = await bcrypt.compare(
      data.password,
      user.password
    );

    console.log("MATCH:", passwordMatch);

    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
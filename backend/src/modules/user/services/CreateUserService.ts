import { UserRepository } from "../repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";
import bcrypt from "bcrypt";

export class CreateUserService {
  private userRepository = new UserRepository();

  async execute(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new AppError("User already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    return user;
  }
}
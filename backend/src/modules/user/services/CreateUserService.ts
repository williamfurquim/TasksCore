import { UserRepository } from "../repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";

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

    const user = await this.userRepository.create(data);

    return user;
  }
}
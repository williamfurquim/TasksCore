import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const service = new CreateUserService();

  const user = await service.execute({
    name,
    email,
    password,
  });

  return res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  });
}
}
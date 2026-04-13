import { Request, Response, NextFunction } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { createUserSchema } from "../dtos/createUser.schema";

export class CreateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createUserSchema.safeParse(req.body);

      if (!parsed.success) {
        return res.status(400).json({
          error: parsed.error.format(),
        });
      }

      const service = new CreateUserService();

      const user = await service.execute(parsed.data);

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }
}
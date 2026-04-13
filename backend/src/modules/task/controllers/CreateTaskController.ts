import { Request, Response, NextFunction } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

export class CreateTaskController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;

      const service = new CreateTaskService();

      const task = await service.execute({
        title,
        userId: req.user.id, // vem do middleware
      });

      return res.status(201).json(task);
    } catch (err) {
      next(err);
    }
  }
}
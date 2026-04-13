import { Request, Response, NextFunction } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

export class UpdateTaskController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const { title, completed } = req.body;

      const service = new UpdateTaskService();

      
      const task = await service.execute({
        taskId: id,
        userId: req.user.id,
        title,
        completed,
      });

      return res.json(task);
    } catch (err) {
      next(err);
    }
  }
}
import { Request, Response, NextFunction } from "express";
import { DeleteTaskService } from "../services/DeleteTaskService";

export class DeleteTaskController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);

      const service = new DeleteTaskService();

      await service.execute({
        taskId: id,
        userId: req.user.id,
      });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
import { Request, Response, NextFunction } from "express";
import { ListTasksService } from "../services/ListTasksService";

export class ListTasksController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const service = new ListTasksService();

      const tasks = await service.execute(req.user.id);

      return res.json(tasks);
    } catch (err) {
      next(err);
    }
  }
}
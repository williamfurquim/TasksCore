import { Request, Response, NextFunction } from "express";
import { CreateSessionService } from "../services/CreateSessionService";

export class CreateSessionController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("CONTROLLER CHAMADO");

      const { email, password } = req.body;

      const service = new CreateSessionService();

      const result = await service.execute({ email, password }); // 🔥 AQUI

      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
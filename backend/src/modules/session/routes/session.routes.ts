import { Router } from "express";
import { CreateSessionController } from "../controllers/CreateSessionController";

const sessionRoutes = Router();

const createSessionController = new CreateSessionController();

sessionRoutes.post("/", (req, res, next) => {
  console.log("ROTA /sessions chamada");
  return createSessionController.handle(req, res, next);
});

export { sessionRoutes };
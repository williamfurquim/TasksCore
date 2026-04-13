import { Router } from "express";
import { CreateTaskController } from "../controllers/CreateTaskController";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware";

const taskRoutes = Router();

const createTaskController = new CreateTaskController();

taskRoutes.post("/", authMiddleware, (req, res, next) => {
  return createTaskController.handle(req, res, next);
});

export { taskRoutes };
import { Router } from "express";
import { CreateTaskController } from "../controllers/CreateTaskController";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware";
import { ListTasksController } from "../controllers/ListTasksController";
import { UpdateTaskController } from "../controllers/UpdateTaskController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";

const taskRoutes = Router();

const createTaskController = new CreateTaskController();

const listTasksController = new ListTasksController();

const updateTaskController = new UpdateTaskController();

const deleteTaskController = new DeleteTaskController();

taskRoutes.post("/", authMiddleware, (req, res, next) => {
  return createTaskController.handle(req, res, next);
});

taskRoutes.get("/", authMiddleware, (req, res, next) => {
  return listTasksController.handle(req, res, next);
});

taskRoutes.put("/:id", authMiddleware, (req, res, next) => {
  return updateTaskController.handle(req, res, next);
});

taskRoutes.delete("/:id", authMiddleware, (req, res, next) => {
  return deleteTaskController.handle(req, res, next);
});

export { taskRoutes };
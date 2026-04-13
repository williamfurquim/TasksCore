import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", (req, res, next) => {
  return createUserController.handle(req, res, next);
});

userRoutes.get("/me", authMiddleware, (req, res) => {
  return res.json({
    userId: req.user.id,
  });
});

export { userRoutes };
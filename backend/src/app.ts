import { sessionRoutes } from "./modules/session/routes/session.routes";
import express from "express";
import cors from "cors";
import { errorHandler } from "./shared/middlewares/errorHandler";
import { userRoutes } from "./modules/user/routes/user.routes";
import { AppError } from "./shared/errors/AppError";
import { taskRoutes } from "./modules/task/routes/task.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "ok" });
});

app.use("/tasks", taskRoutes);

app.get("/error", (req, res) => {
  throw new AppError("Erro de teste", 400);
});

app.get("/users", (req, res) => {
  return res.json({ message: "Use POST" });
}); // TEMPORÁRIO

app.use("/users", userRoutes);
app.use("/sessions", sessionRoutes);

// middleware de erro SEMPRE no final
app.use(errorHandler);

export default app;
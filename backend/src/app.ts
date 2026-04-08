import express from "express";
import cors from "cors";
import { errorHandler } from "./shared/middlewares/errorHandler";
import { userRoutes } from "./modules/user/routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "ok" });
});

import { AppError } from "./shared/errors/AppError";

app.get("/error", (req, res) => {
  throw new AppError("Erro de teste", 400);
});

app.get("/users", (req, res) => {
  return res.json({ message: "Use POST" });
}); // TEMPORÁRIO

app.use("/users", userRoutes);

// middleware de erro SEMPRE no final
app.use(errorHandler);

export default app;
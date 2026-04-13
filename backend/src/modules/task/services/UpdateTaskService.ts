import { TaskRepository } from "../repositories/TaskRepository";
import { AppError } from "../../../shared/errors/AppError";

export class UpdateTaskService {
  private taskRepository = new TaskRepository();

  async execute({
    taskId,
    userId,
    title,
    completed,
  }: {
    taskId: string;
    userId: string;
    title?: string;
    completed?: boolean;
  }) {
    const tasks = await this.taskRepository.findByUser(userId);

    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    return this.taskRepository.update(taskId, {
      title,
      completed,
    });
  }
}
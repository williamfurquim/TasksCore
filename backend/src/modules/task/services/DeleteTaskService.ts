import { TaskRepository } from "../repositories/TaskRepository";
import { AppError } from "../../../shared/errors/AppError";

export class DeleteTaskService {
  private taskRepository = new TaskRepository();

  async execute({ taskId, userId }: { taskId: string; userId: string }) {
    const tasks = await this.taskRepository.findByUser(userId);

    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    await this.taskRepository.delete(taskId);
  }
}
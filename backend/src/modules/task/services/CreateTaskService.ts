import { TaskRepository } from "../repositories/TaskRepository";

export class CreateTaskService {
  private taskRepository = new TaskRepository();

  async execute(data: { title: string; userId: string }) {
    if (!data.title || data.title.trim() === "") {
      throw new Error("Title is required");
    }

    const task = await this.taskRepository.create({
      title: data.title,
      userId: data.userId,
    });

    return task;
  }
}
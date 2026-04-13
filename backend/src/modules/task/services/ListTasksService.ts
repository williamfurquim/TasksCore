import { TaskRepository } from "../repositories/TaskRepository";

export class ListTasksService {
  private taskRepository = new TaskRepository();

  async execute(userId: string) {
    return this.taskRepository.findByUser(userId);
  }
}
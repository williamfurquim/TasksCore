import { prisma } from "../../../shared/infra/prisma";

export class TaskRepository {
  async create(data: { title: string; userId: string }) {
    return prisma.task.create({
      data,
    });
  }

  async findByUser(userId: string) {
    return prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }
}
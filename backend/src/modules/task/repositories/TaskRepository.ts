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

  async update(id: string, data: { title?: string; completed?: boolean }) {
  return prisma.task.update({
    where: { id },
    data,
  });
}
}
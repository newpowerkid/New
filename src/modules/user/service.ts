import { $Enums, User } from "src/generated/prisma";
import { prisma } from "src/libs/db";

const PER_PAGE = 7;

export const UserService = {
  async getAll(query = "", page = 1): Promise<User[]> {
    return prisma.user.findMany({
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      where: {
        role: { in: [$Enums.UserRole.USER] },
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: [{ role: "asc" }, { createdAt: "desc" }],
    });
  },

  async getById(id: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        const err: any = new Error("ไม่พบuserที่ต้องการ");
        err.status = 404; // 🟩 status 404
        throw err;
      }

      return user;
    } catch (error) {
      console.error("❌ Failed to fetch schedule by id:", error);
      throw new Error("ไม่สามารถดึงข้อมูลตารางเรียนได้");
    }
  },

  async getPages(query = ""): Promise<number> {
    const total = await prisma.user.count({
      where: {
        role: { in: [$Enums.UserRole.USER] },
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    return Math.ceil(total / PER_PAGE);
  },
};

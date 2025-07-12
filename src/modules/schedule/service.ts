import { ClassName } from "../../generated/prisma";
import { prisma } from "../../libs/db";
import { ScheduleInput, ScheduleUpdateInput } from "./model";

export const ScheduleService = {
  async getAll() {
    try {
      return await prisma.schedule.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.error("❌ Failed to fetch schedules:", error);
      throw new Error("ไม่สามารถดึงข้อมูลตารางเรียนได้");
    }
  },

  async create(data: ScheduleInput) {
    try {
      return await prisma.schedule.create({
        data: {
          classesName: data.classesName as ClassName,
          ages: data.ages,
          monday: data.monday ?? "",
          tuesday: data.tuesday ?? "",
          wednesday: data.wednesday ?? "",
          thursday: data.thursday ?? "",
          friday: data.friday ?? "",
          saturday: data.saturday ?? "",
          sunday: data.sunday ?? "",
        },
      });
    } catch (error) {
      console.error("❌ Failed to create schedule:", error);
      throw new Error("ไม่สามารถสร้างตารางเรียนได้");
    }
  },

  async update(data: ScheduleUpdateInput) {
    try {
      const found = await prisma.schedule.findUnique({
        where: { id: data.id },
      });

      if (!found) {
        const err: any = new Error("ไม่พบตารางเรียนที่ต้องการอัปเดต");
        err.status = 404; // 🟩 ใส่ status สำหรับการโยน error ไปยัง errorHandler
        throw err;
      }

      return await prisma.schedule.update({
        where: { id: data.id },
        data: {
          classesName: data.classesName as ClassName,
          ages: data.ages,
          monday: data.monday ?? "",
          tuesday: data.tuesday ?? "",
          wednesday: data.wednesday ?? "",
          thursday: data.thursday ?? "",
          friday: data.friday ?? "",
          saturday: data.saturday ?? "",
          sunday: data.sunday ?? "",
        },
      });
    } catch (error) {
      console.error("❌ Failed to update schedule:", error);
      throw new Error("ไม่สามารถอัปเดตตารางเรียนได้");
    }
  },

  async delete(id: string) {
    try {
      const found = await prisma.schedule.findUnique({
        where: { id },
      });

      if (!found) {
        const err: any = new Error("ไม่พบตารางเรียนที่ต้องการลบ");
        err.status = 404; // 🟩 กำหนดสถานะ HTTP
        throw err;
      }

      await prisma.schedule.delete({
        where: { id },
      });

      return { message: "ลบตารางเรียนสำเร็จ" };
    } catch (error) {
      console.error("❌ Failed to delete schedule:", error);
      throw new Error("ไม่สามารถลบตารางเรียนได้");
    }
  },

  async getById(id: string) {
    try {
      const schedule = await prisma.schedule.findUnique({
        where: { id },
      });

      if (!schedule) {
        const err: any = new Error("ไม่พบตารางเรียนที่ต้องการ");
        err.status = 404; // 🟩 status 404
        throw err;
      }

      return schedule;
    } catch (error) {
      console.error("❌ Failed to fetch schedule by id:", error);
      throw new Error("ไม่สามารถดึงข้อมูลตารางเรียนได้");
    }
  },
};

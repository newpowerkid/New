import { t } from "elysia";

// 🟩 สำหรับ query string
export const userQuerySchema = t.Object({
  query: t.Optional(t.String()),
  page: t.Optional(t.String({ pattern: "^[0-9]+$" })), // ตรวจว่าต้องเป็นตัวเลข
});

// 🟩 สำหรับ param :id
export const userIdParam = t.Object({
  id: t.String({ format: "uuid" }),
});

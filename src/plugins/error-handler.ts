import { Elysia } from "elysia";

export const errorHandler = () => new Elysia({
  name: "error-handler",
}).onError(({ code, error, set }) => {
  set.status = set.status || 500;

  return {
    status: "error",
    message:
      code === "VALIDATION"
        ? "Invalid request"
        : code === "NOT_FOUND"
        ? "Resource not found"
        : "Internal server error",
  };
});

//เพิ่ม Error Handler (ไม่ให้โชว์ Stack Trace)
  
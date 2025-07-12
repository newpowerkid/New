import type { Context } from "elysia";
import { auth } from "src/auth";

export const authHandler = (ctx: Context) => {
  const allowed = ["GET", "POST"];
  if (allowed.includes(ctx.request.method)) {
    return auth.handler(ctx.request);
  }
  return new Response("Method Not Allowed", { status: 405 });
};
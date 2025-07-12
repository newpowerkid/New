import { Elysia } from "elysia";
import { schedule } from "./modules/schedule";
import swagger from "@elysiajs/swagger";
import { auth } from "./modules/auth";
import { user } from "./modules/user";

const app = new Elysia()
  .use(auth)
  .use(user)
  .use(schedule)
  .use(swagger())
  .listen(3000);
  app.get("/debug", () => "hello");
  app.get("/api/auth/test", () => "auth test");

export type App = typeof app;
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

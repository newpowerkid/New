import { Elysia } from "elysia";
import { authHandler } from "./handler";

export const auth = new Elysia().all("/api/auth/*", authHandler);
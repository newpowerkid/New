import { Elysia } from "elysia";

export const securityHeadersPlugin = () => new Elysia({
  name: "security-headers",
}).onBeforeHandle(({ set }) => {
  set.headers ??= {};
  set.headers["X-Content-Type-Options"] = "nosniff";
  set.headers["X-Frame-Options"] = "DENY";
  set.headers["X-XSS-Protection"] = "1; mode=block";
});
  
//เพิ่ม Security Headers
import { Elysia } from "elysia";

const rateMap = new Map<string, { count: number; time: number }>();

export const rateLimitPlugin = () => new Elysia({
  name: "rate-limit",
}).onBeforeHandle(({ request, set }: { request: Request; set: any }) => {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const record = rateMap.get(ip) || { count: 0, time: now };

  if (now - record.time > 60_000) {
    record.count = 1;
    record.time = now;
  } else {
    record.count++;
  }

  if (record.count > 100) {
    set.status = 429;
    throw new Error("Too many requests");
  }

  rateMap.set(ip, record);
});

//เพิ่ม Rate Limiting (ง่าย ๆ)

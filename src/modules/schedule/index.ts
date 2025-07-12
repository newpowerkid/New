import { Elysia, t } from "elysia";
import { scheduleModel, scheduleUpdateModel } from "./model";
import { ScheduleService } from "./service";
import { authPlugin } from "src/plugins/auth";
import { errorHandler } from "src/plugins/error-handler";
import { rateLimitPlugin } from "src/plugins/rate-limit";
import { securityHeadersPlugin } from "src/plugins/security-headers";

export const schedule = new Elysia({ prefix: "/api/schedule" })

  .use(errorHandler())
  .use(rateLimitPlugin())
  .use(securityHeadersPlugin())
  // ✅ ใช้ auth plugin ก่อน
  .use(authPlugin)

  // ✅ route GET: public
  .get("/", async () => {
    const schedules = await ScheduleService.getAll();
    return { status: "success", data: schedules };
  })

  // ✅ route GET by ID: public
  .get(
    "/:id",
    async ({ params }) => {
      const schedule = await ScheduleService.getById(params.id);
      return { status: "success", data: schedule };
    },
    {
      params: t.Object({ id: t.String() }),
    }
  )

  // ✅ route อื่นต้องเป็น isAdmin
  .group("/admin", (app) =>
    app.use(authPlugin).guard(
      {
        beforeHandle: (context) => {
          const { isAuthenticated, isAdmin, set } = context as any;
          if (!isAuthenticated || !isAdmin) {
            set.status = 403;
            throw new Error("Forbidden: Admins only");
          }
        },
      },
      (app) =>
        app
          .post(
            "/",
            async ({ body }) => {
              const schedule = await ScheduleService.create(body);
              return { status: "success", data: schedule };
            },
            {
              body: scheduleModel,
            }
          )
          .put(
            "/:id",
            async ({ params, body }) => {
              const schedule = await ScheduleService.update({
                id: params.id,
                ...body,
              });
              return { status: "success", data: schedule };
            },
            {
              params: t.Object({ id: t.String() }),
              body: scheduleModel,
            }
          )
          .delete(
            "/:id",
            async ({ params }) => {
              await ScheduleService.delete(params.id);
              return { status: "success", message: "Deleted successfully" };
            },
            {
              params: t.Object({ id: t.String() }),
            }
          )
    )
  );

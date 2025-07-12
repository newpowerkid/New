import { Elysia, t } from "elysia";
import { UserService } from "./service";
import { authPlugin } from "src/plugins/auth";
import { errorHandler } from "src/plugins/error-handler";
import { rateLimitPlugin } from "src/plugins/rate-limit";
import { securityHeadersPlugin } from "src/plugins/security-headers";
import { userIdParam, userQuerySchema } from "./model";

export const user = new Elysia({ prefix: "/api/user" })
  .use(errorHandler())
  .use(rateLimitPlugin())
  .use(securityHeadersPlugin())
  .use(authPlugin)

  // 🟢 GET /api/user/:id
  .get(
    "/:id",
    async ({ params }) => {
      const user = await UserService.getById(params.id);
      return { status: "success", data: user };
    },
    {
      params: t.Object({ id: t.String() }),
    }
  )

  // 🟢 Group /admin (admin only)
  .group("/admin", (app) =>
    app.guard(
      {

      },
      (app) =>
        app.get(
          "/",
          async ({ query }) => {
            const page = parseInt(query.page ?? "1");
            const search = query.query ?? "";

            const [data, totalPages] = await Promise.all([
              UserService.getAll(search, page),
              UserService.getPages(search),
            ]);

            return { status: "success", data, meta: { page, totalPages } };
          },
          { query: userQuerySchema }
        )
    )
  );

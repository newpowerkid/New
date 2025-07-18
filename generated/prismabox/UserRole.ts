import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserRole = t.Union(
  [
    t.Literal("ADMIN"),
    t.Literal("USER"),
    t.Literal("CUSTOMER"),
    t.Literal("OWNER"),
  ],
  { additionalProperties: false },
);

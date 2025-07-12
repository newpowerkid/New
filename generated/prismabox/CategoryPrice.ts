import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const CategoryPrice = t.Union(
  [t.Literal("Membership"), t.Literal("Lessons"), t.Literal("Etc")],
  { additionalProperties: false },
);

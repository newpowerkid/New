import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const Status = t.Union(
  [t.Literal("Pending"), t.Literal("Cancel"), t.Literal("Confirm")],
  { additionalProperties: false },
);

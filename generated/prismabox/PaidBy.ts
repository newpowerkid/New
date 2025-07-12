import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const PaidBy = t.Union(
  [t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")],
  { additionalProperties: false },
);

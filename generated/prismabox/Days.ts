import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const Days = t.Union(
  [
    t.Literal("Monday"),
    t.Literal("Tuesday"),
    t.Literal("Wednesday"),
    t.Literal("Thursday"),
    t.Literal("Friday"),
    t.Literal("Saturday"),
    t.Literal("Sunday"),
  ],
  { additionalProperties: false },
);

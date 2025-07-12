import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const Title = t.Union(
  [
    t.Literal("MR"),
    t.Literal("MS"),
    t.Literal("MRS"),
    t.Literal("MISS"),
    t.Literal("MASTER"),
  ],
  { additionalProperties: false },
);

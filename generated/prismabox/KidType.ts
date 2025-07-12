import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const KidType = t.Union(
  [
    t.Literal("MEMBERSHIP"),
    t.Literal("LIFETIME"),
    t.Literal("SP"),
    t.Literal("TRIAL"),
    t.Literal("PRIVATE"),
    t.Literal("BD"),
    t.Literal("MEMBERSHIPEXPIRED"),
  ],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const Nationality = t.Union(
  [
    t.Literal("Thai"),
    t.Literal("Japanese"),
    t.Literal("Korean"),
    t.Literal("Indian"),
    t.Literal("Chinese"),
    t.Literal("OtherAsian"),
    t.Literal("Australian"),
    t.Literal("Israel"),
    t.Literal("Europe"),
    t.Literal("Africa"),
    t.Literal("SouthAmerica"),
    t.Literal("NorthAmerica"),
  ],
  { additionalProperties: false },
);

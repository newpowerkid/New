import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ClassName = t.Union(
  [
    t.Literal("Bugs"),
    t.Literal("Birds"),
    t.Literal("Beasts"),
    t.Literal("SuperBeasts"),
    t.Literal("FunnyBugs"),
    t.Literal("GiggleWorms"),
    t.Literal("GoodFriends"),
    t.Literal("FlipsHotshots"),
  ],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const OpenForm = t.Union(
  [t.Literal("OPEN"), t.Literal("OPENKID"), t.Literal("CLOSE")],
  { additionalProperties: false },
);

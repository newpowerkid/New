import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const KidTitle = t.Union([t.Literal("MISS"), t.Literal("MASTER")], {
  additionalProperties: false,
});

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SocialMedia = t.Union([t.Literal("YES"), t.Literal("NO")], {
  additionalProperties: false,
});

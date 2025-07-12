import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BannerPlain = t.Object(
  {
    id: t.String(),
    title: __nullable__(t.String()),
    imageString: t.String(),
    description: __nullable__(t.String()),
    createdAt: t.Date(),
  },
  { additionalProperties: false },
);

export const BannerRelations = t.Object({}, { additionalProperties: false });

export const BannerPlainInputCreate = t.Object(
  {
    title: t.Optional(__nullable__(t.String())),
    imageString: t.String(),
    description: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const BannerPlainInputUpdate = t.Object(
  {
    title: t.Optional(__nullable__(t.String())),
    imageString: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const BannerRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const BannerRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const BannerWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          title: t.String(),
          imageString: t.String(),
          description: t.String(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Banner" },
  ),
);

export const BannerWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              title: t.String(),
              imageString: t.String(),
              description: t.String(),
              createdAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Banner" },
);

export const BannerSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      title: t.Boolean(),
      imageString: t.Boolean(),
      description: t.Boolean(),
      createdAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BannerInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const BannerOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      imageString: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Banner = t.Composite([BannerPlain, BannerRelations], {
  additionalProperties: false,
});

export const BannerInputCreate = t.Composite(
  [BannerPlainInputCreate, BannerRelationsInputCreate],
  { additionalProperties: false },
);

export const BannerInputUpdate = t.Composite(
  [BannerPlainInputUpdate, BannerRelationsInputUpdate],
  { additionalProperties: false },
);

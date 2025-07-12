import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const VerificationPlain = t.Object(
  {
    id: t.String(),
    identifier: t.String(),
    value: t.String(),
    expiresAt: t.Date(),
    createdAt: __nullable__(t.Date()),
    updatedAt: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const VerificationRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const VerificationPlainInputCreate = t.Object(
  {
    identifier: t.String(),
    value: t.String(),
    expiresAt: t.Date(),
    createdAt: t.Optional(__nullable__(t.Date())),
    updatedAt: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const VerificationPlainInputUpdate = t.Object(
  {
    identifier: t.Optional(t.String()),
    value: t.Optional(t.String()),
    expiresAt: t.Optional(t.Date()),
    createdAt: t.Optional(__nullable__(t.Date())),
    updatedAt: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const VerificationRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const VerificationRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const VerificationWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          identifier: t.String(),
          value: t.String(),
          expiresAt: t.Date(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Verification" },
  ),
);

export const VerificationWhereUnique = t.Recursive(
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
              identifier: t.String(),
              value: t.String(),
              expiresAt: t.Date(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Verification" },
);

export const VerificationSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      identifier: t.Boolean(),
      value: t.Boolean(),
      expiresAt: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const VerificationInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const VerificationOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      identifier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      value: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expiresAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Verification = t.Composite(
  [VerificationPlain, VerificationRelations],
  { additionalProperties: false },
);

export const VerificationInputCreate = t.Composite(
  [VerificationPlainInputCreate, VerificationRelationsInputCreate],
  { additionalProperties: false },
);

export const VerificationInputUpdate = t.Composite(
  [VerificationPlainInputUpdate, VerificationRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AuthenticatorPlain = t.Object(
  {
    id: t.String(),
    userId: t.String(),
    credentialID: t.String(),
    counter: t.Integer(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const AuthenticatorRelations = t.Object(
  {
    user: t.Object(
      {
        id: t.String(),
        name: __nullable__(t.String()),
        email: __nullable__(t.String()),
        emailVerified: __nullable__(t.Date()),
        image: __nullable__(t.String()),
        title: __nullable__(
          t.Union(
            [
              t.Literal("MR"),
              t.Literal("MS"),
              t.Literal("MRS"),
              t.Literal("MISS"),
              t.Literal("MASTER"),
            ],
            { additionalProperties: false },
          ),
        ),
        firstName: __nullable__(t.String()),
        lastName: __nullable__(t.String()),
        address: __nullable__(t.String()),
        mobile: __nullable__(t.String()),
        role: t.Union(
          [
            t.Literal("ADMIN"),
            t.Literal("USER"),
            t.Literal("CUSTOMER"),
            t.Literal("OWNER"),
          ],
          { additionalProperties: false },
        ),
        openForm: t.Union(
          [t.Literal("OPEN"), t.Literal("OPENKID"), t.Literal("CLOSE")],
          { additionalProperties: false },
        ),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const AuthenticatorPlainInputCreate = t.Object(
  { counter: t.Integer() },
  { additionalProperties: false },
);

export const AuthenticatorPlainInputUpdate = t.Object(
  { counter: t.Optional(t.Integer()) },
  { additionalProperties: false },
);

export const AuthenticatorRelationsInputCreate = t.Object(
  {
    user: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const AuthenticatorRelationsInputUpdate = t.Partial(
  t.Object(
    {
      user: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const AuthenticatorWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          userId: t.String(),
          credentialID: t.String(),
          counter: t.Integer(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Authenticator" },
  ),
);

export const AuthenticatorWhereUnique = t.Recursive(
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
              userId: t.String(),
              credentialID: t.String(),
              counter: t.Integer(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Authenticator" },
);

export const AuthenticatorSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      userId: t.Boolean(),
      credentialID: t.Boolean(),
      counter: t.Boolean(),
      user: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AuthenticatorInclude = t.Partial(
  t.Object(
    { user: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const AuthenticatorOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      credentialID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      counter: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Authenticator = t.Composite(
  [AuthenticatorPlain, AuthenticatorRelations],
  { additionalProperties: false },
);

export const AuthenticatorInputCreate = t.Composite(
  [AuthenticatorPlainInputCreate, AuthenticatorRelationsInputCreate],
  { additionalProperties: false },
);

export const AuthenticatorInputUpdate = t.Composite(
  [AuthenticatorPlainInputUpdate, AuthenticatorRelationsInputUpdate],
  { additionalProperties: false },
);

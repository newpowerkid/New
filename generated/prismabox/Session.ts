import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SessionPlain = t.Object(
  {
    id: t.String(),
    sessionToken: t.String(),
    userId: t.String(),
    expires: t.Date(),
    expiresAt: t.Date(),
    token: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    ipAddress: __nullable__(t.String()),
    userAgent: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const SessionRelations = t.Object(
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

export const SessionPlainInputCreate = t.Object(
  {
    sessionToken: t.String(),
    expires: t.Date(),
    expiresAt: t.Date(),
    token: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    ipAddress: t.Optional(__nullable__(t.String())),
    userAgent: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const SessionPlainInputUpdate = t.Object(
  {
    sessionToken: t.Optional(t.String()),
    expires: t.Optional(t.Date()),
    expiresAt: t.Optional(t.Date()),
    token: t.Optional(t.String()),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
    ipAddress: t.Optional(__nullable__(t.String())),
    userAgent: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const SessionRelationsInputCreate = t.Object(
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

export const SessionRelationsInputUpdate = t.Partial(
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

export const SessionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          sessionToken: t.String(),
          userId: t.String(),
          expires: t.Date(),
          expiresAt: t.Date(),
          token: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          ipAddress: t.String(),
          userAgent: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Session" },
  ),
);

export const SessionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              sessionToken: t.String(),
              token: t.String(),
              token: t.Object(
                { token: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ sessionToken: t.String() }),
            t.Object({ token: t.String() }),
            t.Object({
              token: t.Object(
                { token: t.String() },
                { additionalProperties: false },
              ),
            }),
          ],
          { additionalProperties: false },
        ),
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
              sessionToken: t.String(),
              userId: t.String(),
              expires: t.Date(),
              expiresAt: t.Date(),
              token: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              ipAddress: t.String(),
              userAgent: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Session" },
);

export const SessionSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      sessionToken: t.Boolean(),
      userId: t.Boolean(),
      expires: t.Boolean(),
      user: t.Boolean(),
      expiresAt: t.Boolean(),
      token: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      ipAddress: t.Boolean(),
      userAgent: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const SessionInclude = t.Partial(
  t.Object(
    { user: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const SessionOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sessionToken: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expires: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expiresAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ipAddress: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userAgent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Session = t.Composite([SessionPlain, SessionRelations], {
  additionalProperties: false,
});

export const SessionInputCreate = t.Composite(
  [SessionPlainInputCreate, SessionRelationsInputCreate],
  { additionalProperties: false },
);

export const SessionInputUpdate = t.Composite(
  [SessionPlainInputUpdate, SessionRelationsInputUpdate],
  { additionalProperties: false },
);

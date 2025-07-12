import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AccountPlain = t.Object(
  {
    id: t.String(),
    userId: t.String(),
    type: t.String(),
    provider: t.String(),
    providerAccountId: t.String(),
    refresh_token: __nullable__(t.String()),
    access_token: __nullable__(t.String()),
    expires_at: __nullable__(t.Integer()),
    token_type: __nullable__(t.String()),
    scope: __nullable__(t.String()),
    id_token: __nullable__(t.String()),
    session_state: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    accountId: t.String(),
    providerId: t.String(),
    accessToken: __nullable__(t.String()),
    refreshToken: __nullable__(t.String()),
    idToken: __nullable__(t.String()),
    accessTokenExpiresAt: __nullable__(t.Date()),
    refreshTokenExpiresAt: __nullable__(t.Date()),
    password: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const AccountRelations = t.Object(
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

export const AccountPlainInputCreate = t.Object(
  {
    type: t.String(),
    provider: t.String(),
    refresh_token: t.Optional(__nullable__(t.String())),
    access_token: t.Optional(__nullable__(t.String())),
    expires_at: t.Optional(__nullable__(t.Integer())),
    token_type: t.Optional(__nullable__(t.String())),
    scope: t.Optional(__nullable__(t.String())),
    id_token: t.Optional(__nullable__(t.String())),
    session_state: t.Optional(__nullable__(t.String())),
    updatedAt: t.Optional(t.Date()),
    accessToken: t.Optional(__nullable__(t.String())),
    refreshToken: t.Optional(__nullable__(t.String())),
    idToken: t.Optional(__nullable__(t.String())),
    accessTokenExpiresAt: t.Optional(__nullable__(t.Date())),
    refreshTokenExpiresAt: t.Optional(__nullable__(t.Date())),
    password: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const AccountPlainInputUpdate = t.Object(
  {
    type: t.Optional(t.String()),
    provider: t.Optional(t.String()),
    refresh_token: t.Optional(__nullable__(t.String())),
    access_token: t.Optional(__nullable__(t.String())),
    expires_at: t.Optional(__nullable__(t.Integer())),
    token_type: t.Optional(__nullable__(t.String())),
    scope: t.Optional(__nullable__(t.String())),
    id_token: t.Optional(__nullable__(t.String())),
    session_state: t.Optional(__nullable__(t.String())),
    updatedAt: t.Optional(t.Date()),
    accessToken: t.Optional(__nullable__(t.String())),
    refreshToken: t.Optional(__nullable__(t.String())),
    idToken: t.Optional(__nullable__(t.String())),
    accessTokenExpiresAt: t.Optional(__nullable__(t.Date())),
    refreshTokenExpiresAt: t.Optional(__nullable__(t.Date())),
    password: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const AccountRelationsInputCreate = t.Object(
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

export const AccountRelationsInputUpdate = t.Partial(
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

export const AccountWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          userId: t.String(),
          type: t.String(),
          provider: t.String(),
          providerAccountId: t.String(),
          refresh_token: t.String(),
          access_token: t.String(),
          expires_at: t.Integer(),
          token_type: t.String(),
          scope: t.String(),
          id_token: t.String(),
          session_state: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          accountId: t.String(),
          providerId: t.String(),
          accessToken: t.String(),
          refreshToken: t.String(),
          idToken: t.String(),
          accessTokenExpiresAt: t.Date(),
          refreshTokenExpiresAt: t.Date(),
          password: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Account" },
  ),
);

export const AccountWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              provider_providerAccountId: t.Object(
                { provider: t.String(), providerAccountId: t.String() },
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
            t.Object({
              provider_providerAccountId: t.Object(
                { provider: t.String(), providerAccountId: t.String() },
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
              userId: t.String(),
              type: t.String(),
              provider: t.String(),
              providerAccountId: t.String(),
              refresh_token: t.String(),
              access_token: t.String(),
              expires_at: t.Integer(),
              token_type: t.String(),
              scope: t.String(),
              id_token: t.String(),
              session_state: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              accountId: t.String(),
              providerId: t.String(),
              accessToken: t.String(),
              refreshToken: t.String(),
              idToken: t.String(),
              accessTokenExpiresAt: t.Date(),
              refreshTokenExpiresAt: t.Date(),
              password: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Account" },
);

export const AccountSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      userId: t.Boolean(),
      type: t.Boolean(),
      provider: t.Boolean(),
      providerAccountId: t.Boolean(),
      refresh_token: t.Boolean(),
      access_token: t.Boolean(),
      expires_at: t.Boolean(),
      token_type: t.Boolean(),
      scope: t.Boolean(),
      id_token: t.Boolean(),
      session_state: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      user: t.Boolean(),
      accountId: t.Boolean(),
      providerId: t.Boolean(),
      accessToken: t.Boolean(),
      refreshToken: t.Boolean(),
      idToken: t.Boolean(),
      accessTokenExpiresAt: t.Boolean(),
      refreshTokenExpiresAt: t.Boolean(),
      password: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AccountInclude = t.Partial(
  t.Object(
    { user: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const AccountOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      providerAccountId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refresh_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      access_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expires_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      token_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      scope: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      id_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      session_state: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      accountId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      providerId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      accessToken: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refreshToken: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      idToken: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      accessTokenExpiresAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refreshTokenExpiresAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      password: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Account = t.Composite([AccountPlain, AccountRelations], {
  additionalProperties: false,
});

export const AccountInputCreate = t.Composite(
  [AccountPlainInputCreate, AccountRelationsInputCreate],
  { additionalProperties: false },
);

export const AccountInputUpdate = t.Composite(
  [AccountPlainInputUpdate, AccountRelationsInputUpdate],
  { additionalProperties: false },
);

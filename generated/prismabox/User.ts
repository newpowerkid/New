import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
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
);

export const UserRelations = t.Object(
  {
    accounts: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    sessions: t.Array(
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
          ipAddress: __nullable__(t.String()),
          userAgent: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    kids: t.Array(
      t.Object(
        {
          id: t.String(),
          userId: __nullable__(t.String()),
          kidId: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    authenticator: t.Array(
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
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const UserPlainInputCreate = t.Object(
  {
    name: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    emailVerified: t.Optional(__nullable__(t.Date())),
    image: t.Optional(__nullable__(t.String())),
    title: t.Optional(
      __nullable__(
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
    ),
    firstName: t.Optional(__nullable__(t.String())),
    lastName: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
    mobile: t.Optional(__nullable__(t.String())),
    role: t.Optional(
      t.Union(
        [
          t.Literal("ADMIN"),
          t.Literal("USER"),
          t.Literal("CUSTOMER"),
          t.Literal("OWNER"),
        ],
        { additionalProperties: false },
      ),
    ),
    openForm: t.Optional(
      t.Union([t.Literal("OPEN"), t.Literal("OPENKID"), t.Literal("CLOSE")], {
        additionalProperties: false,
      }),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const UserPlainInputUpdate = t.Object(
  {
    name: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    emailVerified: t.Optional(__nullable__(t.Date())),
    image: t.Optional(__nullable__(t.String())),
    title: t.Optional(
      __nullable__(
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
    ),
    firstName: t.Optional(__nullable__(t.String())),
    lastName: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
    mobile: t.Optional(__nullable__(t.String())),
    role: t.Optional(
      t.Union(
        [
          t.Literal("ADMIN"),
          t.Literal("USER"),
          t.Literal("CUSTOMER"),
          t.Literal("OWNER"),
        ],
        { additionalProperties: false },
      ),
    ),
    openForm: t.Optional(
      t.Union([t.Literal("OPEN"), t.Literal("OPENKID"), t.Literal("CLOSE")], {
        additionalProperties: false,
      }),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const UserRelationsInputCreate = t.Object(
  {
    accounts: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    sessions: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    kids: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    authenticator: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const UserRelationsInputUpdate = t.Partial(
  t.Object(
    {
      accounts: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      sessions: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      kids: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      authenticator: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          email: t.String(),
          emailVerified: t.Date(),
          image: t.String(),
          title: t.Union(
            [
              t.Literal("MR"),
              t.Literal("MS"),
              t.Literal("MRS"),
              t.Literal("MISS"),
              t.Literal("MASTER"),
            ],
            { additionalProperties: false },
          ),
          firstName: t.String(),
          lastName: t.String(),
          address: t.String(),
          mobile: t.String(),
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
    { $id: "User" },
  ),
);

export const UserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), email: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ email: t.String() })],
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
              name: t.String(),
              email: t.String(),
              emailVerified: t.Date(),
              image: t.String(),
              title: t.Union(
                [
                  t.Literal("MR"),
                  t.Literal("MS"),
                  t.Literal("MRS"),
                  t.Literal("MISS"),
                  t.Literal("MASTER"),
                ],
                { additionalProperties: false },
              ),
              firstName: t.String(),
              lastName: t.String(),
              address: t.String(),
              mobile: t.String(),
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
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "User" },
);

export const UserSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      email: t.Boolean(),
      emailVerified: t.Boolean(),
      image: t.Boolean(),
      title: t.Boolean(),
      firstName: t.Boolean(),
      lastName: t.Boolean(),
      address: t.Boolean(),
      mobile: t.Boolean(),
      role: t.Boolean(),
      openForm: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      accounts: t.Boolean(),
      sessions: t.Boolean(),
      kids: t.Boolean(),
      authenticator: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserInclude = t.Partial(
  t.Object(
    {
      title: t.Boolean(),
      role: t.Boolean(),
      openForm: t.Boolean(),
      accounts: t.Boolean(),
      sessions: t.Boolean(),
      kids: t.Boolean(),
      authenticator: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      emailVerified: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      firstName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lastName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mobile: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: false,
});

export const UserInputCreate = t.Composite(
  [UserPlainInputCreate, UserRelationsInputCreate],
  { additionalProperties: false },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInputUpdate, UserRelationsInputUpdate],
  { additionalProperties: false },
);

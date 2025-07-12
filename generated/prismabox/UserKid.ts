import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserKidPlain = t.Object(
  {
    id: t.String(),
    userId: __nullable__(t.String()),
    kidId: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const UserKidRelations = t.Object(
  {
    user: __nullable__(
      t.Object(
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
    ),
    kid: __nullable__(
      t.Object(
        {
          id: t.String(),
          studentId: __nullable__(t.String()),
          nickName: __nullable__(t.String()),
          identity: __nullable__(t.String()),
          title: t.Union([t.Literal("MISS"), t.Literal("MASTER")], {
            additionalProperties: false,
          }),
          firstName: __nullable__(t.String()),
          lastName: __nullable__(t.String()),
          birthDay: __nullable__(t.Date()),
          comment: __nullable__(t.String()),
          nationality: __nullable__(
            t.Union(
              [
                t.Literal("Thai"),
                t.Literal("Japanese"),
                t.Literal("Korean"),
                t.Literal("Indian"),
                t.Literal("Chinese"),
                t.Literal("OtherAsian"),
                t.Literal("Australian"),
                t.Literal("Israel"),
                t.Literal("Europe"),
                t.Literal("Africa"),
                t.Literal("SouthAmerica"),
                t.Literal("NorthAmerica"),
              ],
              { additionalProperties: false },
            ),
          ),
          socialMedia: t.Union([t.Literal("YES"), t.Literal("NO")], {
            additionalProperties: false,
          }),
          kidType: t.Union(
            [
              t.Literal("MEMBERSHIP"),
              t.Literal("LIFETIME"),
              t.Literal("SP"),
              t.Literal("TRIAL"),
              t.Literal("PRIVATE"),
              t.Literal("BD"),
              t.Literal("MEMBERSHIPEXPIRED"),
            ],
            { additionalProperties: false },
          ),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const UserKidPlainInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const UserKidPlainInputUpdate = t.Object(
  {},
  { additionalProperties: false },
);

export const UserKidRelationsInputCreate = t.Object(
  {
    user: t.Optional(
      t.Object(
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
    ),
    kid: t.Optional(
      t.Object(
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
    ),
  },
  { additionalProperties: false },
);

export const UserKidRelationsInputUpdate = t.Partial(
  t.Object(
    {
      user: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      kid: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const UserKidWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          userId: t.String(),
          kidId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "UserKid" },
  ),
);

export const UserKidWhereUnique = t.Recursive(
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
            { id: t.String(), userId: t.String(), kidId: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "UserKid" },
);

export const UserKidSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      userId: t.Boolean(),
      kidId: t.Boolean(),
      user: t.Boolean(),
      kid: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserKidInclude = t.Partial(
  t.Object(
    { user: t.Boolean(), kid: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const UserKidOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      kidId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const UserKid = t.Composite([UserKidPlain, UserKidRelations], {
  additionalProperties: false,
});

export const UserKidInputCreate = t.Composite(
  [UserKidPlainInputCreate, UserKidRelationsInputCreate],
  { additionalProperties: false },
);

export const UserKidInputUpdate = t.Composite(
  [UserKidPlainInputUpdate, UserKidRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const KidPlain = t.Object(
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
);

export const KidRelations = t.Object(
  {
    users: t.Array(
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
    bill: t.Array(
      t.Object(
        {
          id: t.String(),
          kidId: __nullable__(t.String()),
          paidBy: t.Union(
            [t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")],
            { additionalProperties: false },
          ),
          reportId: __nullable__(t.String()),
          classBill: __nullable__(t.String()),
          isPaid: t.Boolean(),
          totalPaid: t.Number(),
          comment: __nullable__(t.String()),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    BookingBill: t.Array(
      t.Object(
        {
          id: t.String(),
          kidId: t.String(),
          priceId: t.String(),
          billId: t.String(),
          remainingLessons: __nullable__(t.Integer()),
          expiryDate: __nullable__(t.Date()),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    Booking: t.Array(
      t.Object(
        {
          id: t.String(),
          kidId: __nullable__(t.String()),
          bookingBillId: __nullable__(t.String()),
          use: __nullable__(t.Boolean()),
          comment: __nullable__(t.String()),
          dateBooking: t.Date(),
          timeBooking: __nullable__(t.String()),
          classBooking: __nullable__(t.String()),
          status: t.Union(
            [t.Literal("Pending"), t.Literal("Cancel"), t.Literal("Confirm")],
            { additionalProperties: false },
          ),
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

export const KidPlainInputCreate = t.Object(
  {
    nickName: t.Optional(__nullable__(t.String())),
    identity: t.Optional(__nullable__(t.String())),
    title: t.Optional(
      t.Union([t.Literal("MISS"), t.Literal("MASTER")], {
        additionalProperties: false,
      }),
    ),
    firstName: t.Optional(__nullable__(t.String())),
    lastName: t.Optional(__nullable__(t.String())),
    birthDay: t.Optional(__nullable__(t.Date())),
    comment: t.Optional(__nullable__(t.String())),
    nationality: t.Optional(
      __nullable__(
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
    ),
    socialMedia: t.Optional(
      t.Union([t.Literal("YES"), t.Literal("NO")], {
        additionalProperties: false,
      }),
    ),
    kidType: t.Optional(
      t.Union(
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
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const KidPlainInputUpdate = t.Object(
  {
    nickName: t.Optional(__nullable__(t.String())),
    identity: t.Optional(__nullable__(t.String())),
    title: t.Optional(
      t.Union([t.Literal("MISS"), t.Literal("MASTER")], {
        additionalProperties: false,
      }),
    ),
    firstName: t.Optional(__nullable__(t.String())),
    lastName: t.Optional(__nullable__(t.String())),
    birthDay: t.Optional(__nullable__(t.Date())),
    comment: t.Optional(__nullable__(t.String())),
    nationality: t.Optional(
      __nullable__(
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
    ),
    socialMedia: t.Optional(
      t.Union([t.Literal("YES"), t.Literal("NO")], {
        additionalProperties: false,
      }),
    ),
    kidType: t.Optional(
      t.Union(
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
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const KidRelationsInputCreate = t.Object(
  {
    users: t.Optional(
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
    bill: t.Optional(
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
    BookingBill: t.Optional(
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
    Booking: t.Optional(
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

export const KidRelationsInputUpdate = t.Partial(
  t.Object(
    {
      users: t.Partial(
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
      bill: t.Partial(
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
      BookingBill: t.Partial(
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
      Booking: t.Partial(
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

export const KidWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          studentId: t.String(),
          nickName: t.String(),
          identity: t.String(),
          title: t.Union([t.Literal("MISS"), t.Literal("MASTER")], {
            additionalProperties: false,
          }),
          firstName: t.String(),
          lastName: t.String(),
          birthDay: t.Date(),
          comment: t.String(),
          nationality: t.Union(
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
    { $id: "Kid" },
  ),
);

export const KidWhereUnique = t.Recursive(
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
              studentId: t.String(),
              nickName: t.String(),
              identity: t.String(),
              title: t.Union([t.Literal("MISS"), t.Literal("MASTER")], {
                additionalProperties: false,
              }),
              firstName: t.String(),
              lastName: t.String(),
              birthDay: t.Date(),
              comment: t.String(),
              nationality: t.Union(
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
      ],
      { additionalProperties: false },
    ),
  { $id: "Kid" },
);

export const KidSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      studentId: t.Boolean(),
      nickName: t.Boolean(),
      identity: t.Boolean(),
      title: t.Boolean(),
      firstName: t.Boolean(),
      lastName: t.Boolean(),
      birthDay: t.Boolean(),
      comment: t.Boolean(),
      nationality: t.Boolean(),
      socialMedia: t.Boolean(),
      kidType: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      users: t.Boolean(),
      bill: t.Boolean(),
      BookingBill: t.Boolean(),
      Booking: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const KidInclude = t.Partial(
  t.Object(
    {
      title: t.Boolean(),
      nationality: t.Boolean(),
      socialMedia: t.Boolean(),
      kidType: t.Boolean(),
      users: t.Boolean(),
      bill: t.Boolean(),
      BookingBill: t.Boolean(),
      Booking: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const KidOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      studentId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      nickName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      firstName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lastName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      birthDay: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      comment: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Kid = t.Composite([KidPlain, KidRelations], {
  additionalProperties: false,
});

export const KidInputCreate = t.Composite(
  [KidPlainInputCreate, KidRelationsInputCreate],
  { additionalProperties: false },
);

export const KidInputUpdate = t.Composite(
  [KidPlainInputUpdate, KidRelationsInputUpdate],
  { additionalProperties: false },
);

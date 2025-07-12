import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BookingPlain = t.Object(
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
);

export const BookingRelations = t.Object(
  {
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
    bookingBill: __nullable__(
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
    ),
  },
  { additionalProperties: false },
);

export const BookingPlainInputCreate = t.Object(
  {
    use: t.Optional(__nullable__(t.Boolean())),
    comment: t.Optional(__nullable__(t.String())),
    dateBooking: t.Date(),
    timeBooking: t.Optional(__nullable__(t.String())),
    classBooking: t.Optional(__nullable__(t.String())),
    status: t.Optional(
      t.Union(
        [t.Literal("Pending"), t.Literal("Cancel"), t.Literal("Confirm")],
        { additionalProperties: false },
      ),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BookingPlainInputUpdate = t.Object(
  {
    use: t.Optional(__nullable__(t.Boolean())),
    comment: t.Optional(__nullable__(t.String())),
    dateBooking: t.Optional(t.Date()),
    timeBooking: t.Optional(__nullable__(t.String())),
    classBooking: t.Optional(__nullable__(t.String())),
    status: t.Optional(
      t.Union(
        [t.Literal("Pending"), t.Literal("Cancel"), t.Literal("Confirm")],
        { additionalProperties: false },
      ),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BookingRelationsInputCreate = t.Object(
  {
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
    bookingBill: t.Optional(
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

export const BookingRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
      bookingBill: t.Partial(
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

export const BookingWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          kidId: t.String(),
          bookingBillId: t.String(),
          use: t.Boolean(),
          comment: t.String(),
          dateBooking: t.Date(),
          timeBooking: t.String(),
          classBooking: t.String(),
          status: t.Union(
            [t.Literal("Pending"), t.Literal("Cancel"), t.Literal("Confirm")],
            { additionalProperties: false },
          ),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Booking" },
  ),
);

export const BookingWhereUnique = t.Recursive(
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
              kidId: t.String(),
              bookingBillId: t.String(),
              use: t.Boolean(),
              comment: t.String(),
              dateBooking: t.Date(),
              timeBooking: t.String(),
              classBooking: t.String(),
              status: t.Union(
                [
                  t.Literal("Pending"),
                  t.Literal("Cancel"),
                  t.Literal("Confirm"),
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
  { $id: "Booking" },
);

export const BookingSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      kidId: t.Boolean(),
      bookingBillId: t.Boolean(),
      use: t.Boolean(),
      comment: t.Boolean(),
      dateBooking: t.Boolean(),
      timeBooking: t.Boolean(),
      classBooking: t.Boolean(),
      status: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      kid: t.Boolean(),
      bookingBill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BookingInclude = t.Partial(
  t.Object(
    {
      status: t.Boolean(),
      kid: t.Boolean(),
      bookingBill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BookingOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      kidId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      bookingBillId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      use: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      comment: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dateBooking: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      timeBooking: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      classBooking: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Booking = t.Composite([BookingPlain, BookingRelations], {
  additionalProperties: false,
});

export const BookingInputCreate = t.Composite(
  [BookingPlainInputCreate, BookingRelationsInputCreate],
  { additionalProperties: false },
);

export const BookingInputUpdate = t.Composite(
  [BookingPlainInputUpdate, BookingRelationsInputUpdate],
  { additionalProperties: false },
);

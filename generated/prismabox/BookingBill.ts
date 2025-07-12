import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BookingBillPlain = t.Object(
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
);

export const BookingBillRelations = t.Object(
  {
    kid: t.Object(
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
    price: t.Object(
      {
        id: t.String(),
        list: __nullable__(t.String()),
        noLessons: __nullable__(t.Integer()),
        checkbox: t.Boolean(),
        price: __nullable__(t.Number()),
        durationMonths: __nullable__(t.Integer()),
        unlimited: __nullable__(t.Boolean()),
        categoryPrice: t.Union(
          [t.Literal("Membership"), t.Literal("Lessons"), t.Literal("Etc")],
          { additionalProperties: false },
        ),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
    bookings: t.Array(
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
    bill: t.Object(
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
  },
  { additionalProperties: false },
);

export const BookingBillPlainInputCreate = t.Object(
  {
    remainingLessons: t.Optional(__nullable__(t.Integer())),
    expiryDate: t.Optional(__nullable__(t.Date())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BookingBillPlainInputUpdate = t.Object(
  {
    remainingLessons: t.Optional(__nullable__(t.Integer())),
    expiryDate: t.Optional(__nullable__(t.Date())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BookingBillRelationsInputCreate = t.Object(
  {
    kid: t.Object(
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
    price: t.Object(
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
    bookings: t.Optional(
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
    bill: t.Object(
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

export const BookingBillRelationsInputUpdate = t.Partial(
  t.Object(
    {
      kid: t.Object(
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
      price: t.Object(
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
      bookings: t.Partial(
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
      bill: t.Object(
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

export const BookingBillWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          kidId: t.String(),
          priceId: t.String(),
          billId: t.String(),
          remainingLessons: t.Integer(),
          expiryDate: t.Date(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "BookingBill" },
  ),
);

export const BookingBillWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              billId_priceId: t.Object(
                { billId: t.String(), priceId: t.String() },
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
              billId_priceId: t.Object(
                { billId: t.String(), priceId: t.String() },
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
              kidId: t.String(),
              priceId: t.String(),
              billId: t.String(),
              remainingLessons: t.Integer(),
              expiryDate: t.Date(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "BookingBill" },
);

export const BookingBillSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      kidId: t.Boolean(),
      priceId: t.Boolean(),
      billId: t.Boolean(),
      remainingLessons: t.Boolean(),
      expiryDate: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      kid: t.Boolean(),
      price: t.Boolean(),
      bookings: t.Boolean(),
      bill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BookingBillInclude = t.Partial(
  t.Object(
    {
      kid: t.Boolean(),
      price: t.Boolean(),
      bookings: t.Boolean(),
      bill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BookingBillOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      kidId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priceId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      billId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      remainingLessons: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expiryDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const BookingBill = t.Composite(
  [BookingBillPlain, BookingBillRelations],
  { additionalProperties: false },
);

export const BookingBillInputCreate = t.Composite(
  [BookingBillPlainInputCreate, BookingBillRelationsInputCreate],
  { additionalProperties: false },
);

export const BookingBillInputUpdate = t.Composite(
  [BookingBillPlainInputUpdate, BookingBillRelationsInputUpdate],
  { additionalProperties: false },
);

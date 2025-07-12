import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BillPlain = t.Object(
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
);

export const BillRelations = t.Object(
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
    bill: t.Array(
      t.Object(
        { id: t.String(), reportId: t.String(), billId: t.String() },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    price: t.Array(
      t.Object(
        {
          id: t.String(),
          billId: t.String(),
          priceId: t.String(),
          quantity: t.Integer(),
          plusAndMinus: __nullable__(t.Integer()),
          discountPct: __nullable__(t.Number()),
          discountAmt: __nullable__(t.Number()),
          startDate: __nullable__(t.Date()),
          expiryDate: __nullable__(t.Date()),
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
    payments: t.Array(
      t.Object(
        {
          id: t.String(),
          billId: t.String(),
          amount: t.Number(),
          method: t.Union(
            [t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")],
            { additionalProperties: false },
          ),
          status: t.Union(
            [
              t.Literal("PENDING"),
              t.Literal("COMPLETED"),
              t.Literal("FAILED"),
              t.Literal("REFUNDED"),
              t.Literal("PROCESSING"),
              t.Literal("EXPIRED"),
            ],
            { additionalProperties: false },
          ),
          transactionId: __nullable__(t.String()),
          paymentGateway: __nullable__(t.String()),
          paidAt: __nullable__(t.Date()),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          cardLast4: __nullable__(t.String()),
          cardBrand: __nullable__(t.String()),
          authorizationId: __nullable__(t.String()),
          qrCode: __nullable__(t.String()),
          referenceNumber: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const BillPlainInputCreate = t.Object(
  {
    paidBy: t.Optional(
      t.Union([t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")], {
        additionalProperties: false,
      }),
    ),
    classBill: t.Optional(__nullable__(t.String())),
    comment: t.Optional(__nullable__(t.String())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BillPlainInputUpdate = t.Object(
  {
    paidBy: t.Optional(
      t.Union([t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")], {
        additionalProperties: false,
      }),
    ),
    classBill: t.Optional(__nullable__(t.String())),
    comment: t.Optional(__nullable__(t.String())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BillRelationsInputCreate = t.Object(
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
    price: t.Optional(
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
    payments: t.Optional(
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

export const BillRelationsInputUpdate = t.Partial(
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
      price: t.Partial(
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
      payments: t.Partial(
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

export const BillWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          kidId: t.String(),
          paidBy: t.Union(
            [t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")],
            { additionalProperties: false },
          ),
          reportId: t.String(),
          classBill: t.String(),
          isPaid: t.Boolean(),
          totalPaid: t.Number(),
          comment: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Bill" },
  ),
);

export const BillWhereUnique = t.Recursive(
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
              paidBy: t.Union(
                [t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")],
                { additionalProperties: false },
              ),
              reportId: t.String(),
              classBill: t.String(),
              isPaid: t.Boolean(),
              totalPaid: t.Number(),
              comment: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Bill" },
);

export const BillSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      kidId: t.Boolean(),
      paidBy: t.Boolean(),
      reportId: t.Boolean(),
      classBill: t.Boolean(),
      isPaid: t.Boolean(),
      totalPaid: t.Boolean(),
      comment: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      kid: t.Boolean(),
      bill: t.Boolean(),
      price: t.Boolean(),
      BookingBill: t.Boolean(),
      payments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BillInclude = t.Partial(
  t.Object(
    {
      paidBy: t.Boolean(),
      kid: t.Boolean(),
      bill: t.Boolean(),
      price: t.Boolean(),
      BookingBill: t.Boolean(),
      payments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BillOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      kidId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reportId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      classBill: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isPaid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      totalPaid: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Bill = t.Composite([BillPlain, BillRelations], {
  additionalProperties: false,
});

export const BillInputCreate = t.Composite(
  [BillPlainInputCreate, BillRelationsInputCreate],
  { additionalProperties: false },
);

export const BillInputUpdate = t.Composite(
  [BillPlainInputUpdate, BillRelationsInputUpdate],
  { additionalProperties: false },
);

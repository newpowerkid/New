import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const PaymentPlain = t.Object(
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
);

export const PaymentRelations = t.Object(
  {
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

export const PaymentPlainInputCreate = t.Object(
  {
    amount: t.Number(),
    method: t.Optional(
      t.Union([t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")], {
        additionalProperties: false,
      }),
    ),
    status: t.Optional(
      t.Union(
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
    ),
    paymentGateway: t.Optional(__nullable__(t.String())),
    paidAt: t.Optional(__nullable__(t.Date())),
    cardLast4: t.Optional(__nullable__(t.String())),
    cardBrand: t.Optional(__nullable__(t.String())),
    qrCode: t.Optional(__nullable__(t.String())),
    referenceNumber: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const PaymentPlainInputUpdate = t.Object(
  {
    amount: t.Optional(t.Number()),
    method: t.Optional(
      t.Union([t.Literal("Credit"), t.Literal("Cash"), t.Literal("Cheque")], {
        additionalProperties: false,
      }),
    ),
    status: t.Optional(
      t.Union(
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
    ),
    paymentGateway: t.Optional(__nullable__(t.String())),
    paidAt: t.Optional(__nullable__(t.Date())),
    cardLast4: t.Optional(__nullable__(t.String())),
    cardBrand: t.Optional(__nullable__(t.String())),
    qrCode: t.Optional(__nullable__(t.String())),
    referenceNumber: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const PaymentRelationsInputCreate = t.Object(
  {
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

export const PaymentRelationsInputUpdate = t.Partial(
  t.Object(
    {
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

export const PaymentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
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
          transactionId: t.String(),
          paymentGateway: t.String(),
          paidAt: t.Date(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          cardLast4: t.String(),
          cardBrand: t.String(),
          authorizationId: t.String(),
          qrCode: t.String(),
          referenceNumber: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Payment" },
  ),
);

export const PaymentWhereUnique = t.Recursive(
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
              transactionId: t.String(),
              paymentGateway: t.String(),
              paidAt: t.Date(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              cardLast4: t.String(),
              cardBrand: t.String(),
              authorizationId: t.String(),
              qrCode: t.String(),
              referenceNumber: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Payment" },
);

export const PaymentSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      billId: t.Boolean(),
      amount: t.Boolean(),
      method: t.Boolean(),
      status: t.Boolean(),
      transactionId: t.Boolean(),
      paymentGateway: t.Boolean(),
      paidAt: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      cardLast4: t.Boolean(),
      cardBrand: t.Boolean(),
      authorizationId: t.Boolean(),
      qrCode: t.Boolean(),
      referenceNumber: t.Boolean(),
      bill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const PaymentInclude = t.Partial(
  t.Object(
    {
      method: t.Boolean(),
      status: t.Boolean(),
      bill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const PaymentOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      billId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      transactionId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      paymentGateway: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      paidAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cardLast4: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cardBrand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authorizationId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qrCode: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      referenceNumber: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Payment = t.Composite([PaymentPlain, PaymentRelations], {
  additionalProperties: false,
});

export const PaymentInputCreate = t.Composite(
  [PaymentPlainInputCreate, PaymentRelationsInputCreate],
  { additionalProperties: false },
);

export const PaymentInputUpdate = t.Composite(
  [PaymentPlainInputUpdate, PaymentRelationsInputUpdate],
  { additionalProperties: false },
);

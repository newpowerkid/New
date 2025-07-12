import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BillPricePlain = t.Object(
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
);

export const BillPriceRelations = t.Object(
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
  },
  { additionalProperties: false },
);

export const BillPricePlainInputCreate = t.Object(
  {
    quantity: t.Optional(t.Integer()),
    plusAndMinus: t.Optional(__nullable__(t.Integer())),
    discountPct: t.Optional(__nullable__(t.Number())),
    discountAmt: t.Optional(__nullable__(t.Number())),
    startDate: t.Optional(__nullable__(t.Date())),
    expiryDate: t.Optional(__nullable__(t.Date())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BillPricePlainInputUpdate = t.Object(
  {
    quantity: t.Optional(t.Integer()),
    plusAndMinus: t.Optional(__nullable__(t.Integer())),
    discountPct: t.Optional(__nullable__(t.Number())),
    discountAmt: t.Optional(__nullable__(t.Number())),
    startDate: t.Optional(__nullable__(t.Date())),
    expiryDate: t.Optional(__nullable__(t.Date())),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const BillPriceRelationsInputCreate = t.Object(
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
  },
  { additionalProperties: false },
);

export const BillPriceRelationsInputUpdate = t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const BillPriceWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          billId: t.String(),
          priceId: t.String(),
          quantity: t.Integer(),
          plusAndMinus: t.Integer(),
          discountPct: t.Number(),
          discountAmt: t.Number(),
          startDate: t.Date(),
          expiryDate: t.Date(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "BillPrice" },
  ),
);

export const BillPriceWhereUnique = t.Recursive(
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
              billId: t.String(),
              priceId: t.String(),
              quantity: t.Integer(),
              plusAndMinus: t.Integer(),
              discountPct: t.Number(),
              discountAmt: t.Number(),
              startDate: t.Date(),
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
  { $id: "BillPrice" },
);

export const BillPriceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      billId: t.Boolean(),
      priceId: t.Boolean(),
      quantity: t.Boolean(),
      plusAndMinus: t.Boolean(),
      discountPct: t.Boolean(),
      discountAmt: t.Boolean(),
      startDate: t.Boolean(),
      expiryDate: t.Boolean(),
      bill: t.Boolean(),
      price: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BillPriceInclude = t.Partial(
  t.Object(
    { bill: t.Boolean(), price: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const BillPriceOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      billId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priceId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      plusAndMinus: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discountPct: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discountAmt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      startDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const BillPrice = t.Composite([BillPricePlain, BillPriceRelations], {
  additionalProperties: false,
});

export const BillPriceInputCreate = t.Composite(
  [BillPricePlainInputCreate, BillPriceRelationsInputCreate],
  { additionalProperties: false },
);

export const BillPriceInputUpdate = t.Composite(
  [BillPricePlainInputUpdate, BillPriceRelationsInputUpdate],
  { additionalProperties: false },
);

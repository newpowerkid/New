import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const PricePlain = t.Object(
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
);

export const PriceRelations = t.Object(
  {
    bill: t.Array(
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
  },
  { additionalProperties: false },
);

export const PricePlainInputCreate = t.Object(
  {
    list: t.Optional(__nullable__(t.String())),
    noLessons: t.Optional(__nullable__(t.Integer())),
    checkbox: t.Boolean(),
    price: t.Optional(__nullable__(t.Number())),
    durationMonths: t.Optional(__nullable__(t.Integer())),
    unlimited: t.Optional(__nullable__(t.Boolean())),
    categoryPrice: t.Optional(
      t.Union(
        [t.Literal("Membership"), t.Literal("Lessons"), t.Literal("Etc")],
        { additionalProperties: false },
      ),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const PricePlainInputUpdate = t.Object(
  {
    list: t.Optional(__nullable__(t.String())),
    noLessons: t.Optional(__nullable__(t.Integer())),
    checkbox: t.Optional(t.Boolean()),
    price: t.Optional(__nullable__(t.Number())),
    durationMonths: t.Optional(__nullable__(t.Integer())),
    unlimited: t.Optional(__nullable__(t.Boolean())),
    categoryPrice: t.Optional(
      t.Union(
        [t.Literal("Membership"), t.Literal("Lessons"), t.Literal("Etc")],
        { additionalProperties: false },
      ),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const PriceRelationsInputCreate = t.Object(
  {
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
  },
  { additionalProperties: false },
);

export const PriceRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
    },
    { additionalProperties: false },
  ),
);

export const PriceWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          list: t.String(),
          noLessons: t.Integer(),
          checkbox: t.Boolean(),
          price: t.Number(),
          durationMonths: t.Integer(),
          unlimited: t.Boolean(),
          categoryPrice: t.Union(
            [t.Literal("Membership"), t.Literal("Lessons"), t.Literal("Etc")],
            { additionalProperties: false },
          ),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Price" },
  ),
);

export const PriceWhereUnique = t.Recursive(
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
              list: t.String(),
              noLessons: t.Integer(),
              checkbox: t.Boolean(),
              price: t.Number(),
              durationMonths: t.Integer(),
              unlimited: t.Boolean(),
              categoryPrice: t.Union(
                [
                  t.Literal("Membership"),
                  t.Literal("Lessons"),
                  t.Literal("Etc"),
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
  { $id: "Price" },
);

export const PriceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      list: t.Boolean(),
      noLessons: t.Boolean(),
      checkbox: t.Boolean(),
      price: t.Boolean(),
      durationMonths: t.Boolean(),
      unlimited: t.Boolean(),
      categoryPrice: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      bill: t.Boolean(),
      BookingBill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const PriceInclude = t.Partial(
  t.Object(
    {
      categoryPrice: t.Boolean(),
      bill: t.Boolean(),
      BookingBill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const PriceOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      list: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      noLessons: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      checkbox: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      durationMonths: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unlimited: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Price = t.Composite([PricePlain, PriceRelations], {
  additionalProperties: false,
});

export const PriceInputCreate = t.Composite(
  [PricePlainInputCreate, PriceRelationsInputCreate],
  { additionalProperties: false },
);

export const PriceInputUpdate = t.Composite(
  [PricePlainInputUpdate, PriceRelationsInputUpdate],
  { additionalProperties: false },
);

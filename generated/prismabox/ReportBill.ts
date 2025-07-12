import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ReportBillPlain = t.Object(
  { id: t.String(), reportId: t.String(), billId: t.String() },
  { additionalProperties: false },
);

export const ReportBillRelations = t.Object(
  {
    report: t.Object(
      {
        id: t.String(),
        type: t.String(),
        date: t.Date(),
        totalIncome: t.Number(),
        totalExpense: __nullable__(t.Number()),
        createdAt: t.Date(),
      },
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

export const ReportBillPlainInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ReportBillPlainInputUpdate = t.Object(
  {},
  { additionalProperties: false },
);

export const ReportBillRelationsInputCreate = t.Object(
  {
    report: t.Object(
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

export const ReportBillRelationsInputUpdate = t.Partial(
  t.Object(
    {
      report: t.Object(
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

export const ReportBillWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          reportId: t.String(),
          billId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "ReportBill" },
  ),
);

export const ReportBillWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              reportId_billId: t.Object(
                { reportId: t.String(), billId: t.String() },
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
              reportId_billId: t.Object(
                { reportId: t.String(), billId: t.String() },
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
            { id: t.String(), reportId: t.String(), billId: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ReportBill" },
);

export const ReportBillSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      reportId: t.Boolean(),
      billId: t.Boolean(),
      report: t.Boolean(),
      bill: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ReportBillInclude = t.Partial(
  t.Object(
    { report: t.Boolean(), bill: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ReportBillOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reportId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      billId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const ReportBill = t.Composite([ReportBillPlain, ReportBillRelations], {
  additionalProperties: false,
});

export const ReportBillInputCreate = t.Composite(
  [ReportBillPlainInputCreate, ReportBillRelationsInputCreate],
  { additionalProperties: false },
);

export const ReportBillInputUpdate = t.Composite(
  [ReportBillPlainInputUpdate, ReportBillRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ReportPlain = t.Object(
  {
    id: t.String(),
    type: t.String(),
    date: t.Date(),
    totalIncome: t.Number(),
    totalExpense: __nullable__(t.Number()),
    createdAt: t.Date(),
  },
  { additionalProperties: false },
);

export const ReportRelations = t.Object(
  {
    resport: t.Array(
      t.Object(
        { id: t.String(), reportId: t.String(), billId: t.String() },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const ReportPlainInputCreate = t.Object(
  {
    type: t.String(),
    date: t.Date(),
    totalIncome: t.Number(),
    totalExpense: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const ReportPlainInputUpdate = t.Object(
  {
    type: t.Optional(t.String()),
    date: t.Optional(t.Date()),
    totalIncome: t.Optional(t.Number()),
    totalExpense: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const ReportRelationsInputCreate = t.Object(
  {
    resport: t.Optional(
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

export const ReportRelationsInputUpdate = t.Partial(
  t.Object(
    {
      resport: t.Partial(
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

export const ReportWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          type: t.String(),
          date: t.Date(),
          totalIncome: t.Number(),
          totalExpense: t.Number(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Report" },
  ),
);

export const ReportWhereUnique = t.Recursive(
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
              type: t.String(),
              date: t.Date(),
              totalIncome: t.Number(),
              totalExpense: t.Number(),
              createdAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Report" },
);

export const ReportSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      type: t.Boolean(),
      date: t.Boolean(),
      totalIncome: t.Boolean(),
      totalExpense: t.Boolean(),
      createdAt: t.Boolean(),
      resport: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ReportInclude = t.Partial(
  t.Object(
    { resport: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ReportOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      totalIncome: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      totalExpense: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Report = t.Composite([ReportPlain, ReportRelations], {
  additionalProperties: false,
});

export const ReportInputCreate = t.Composite(
  [ReportPlainInputCreate, ReportRelationsInputCreate],
  { additionalProperties: false },
);

export const ReportInputUpdate = t.Composite(
  [ReportPlainInputUpdate, ReportRelationsInputUpdate],
  { additionalProperties: false },
);

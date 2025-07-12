import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SchedulePlain = t.Object(
  {
    id: t.String(),
    classesName: t.Union(
      [
        t.Literal("Bugs"),
        t.Literal("Birds"),
        t.Literal("Beasts"),
        t.Literal("SuperBeasts"),
        t.Literal("FunnyBugs"),
        t.Literal("GiggleWorms"),
        t.Literal("GoodFriends"),
        t.Literal("FlipsHotshots"),
      ],
      { additionalProperties: false },
    ),
    ages: __nullable__(t.String()),
    monday: __nullable__(t.String()),
    tuesday: __nullable__(t.String()),
    wednesday: __nullable__(t.String()),
    thursday: __nullable__(t.String()),
    friday: __nullable__(t.String()),
    saturday: __nullable__(t.String()),
    sunday: __nullable__(t.String()),
    days: t.Union(
      [
        t.Literal("Monday"),
        t.Literal("Tuesday"),
        t.Literal("Wednesday"),
        t.Literal("Thursday"),
        t.Literal("Friday"),
        t.Literal("Saturday"),
        t.Literal("Sunday"),
      ],
      { additionalProperties: false },
    ),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const ScheduleRelations = t.Object({}, { additionalProperties: false });

export const SchedulePlainInputCreate = t.Object(
  {
    classesName: t.Optional(
      t.Union(
        [
          t.Literal("Bugs"),
          t.Literal("Birds"),
          t.Literal("Beasts"),
          t.Literal("SuperBeasts"),
          t.Literal("FunnyBugs"),
          t.Literal("GiggleWorms"),
          t.Literal("GoodFriends"),
          t.Literal("FlipsHotshots"),
        ],
        { additionalProperties: false },
      ),
    ),
    ages: t.Optional(__nullable__(t.String())),
    monday: t.Optional(__nullable__(t.String())),
    tuesday: t.Optional(__nullable__(t.String())),
    wednesday: t.Optional(__nullable__(t.String())),
    thursday: t.Optional(__nullable__(t.String())),
    friday: t.Optional(__nullable__(t.String())),
    saturday: t.Optional(__nullable__(t.String())),
    sunday: t.Optional(__nullable__(t.String())),
    days: t.Optional(
      t.Union(
        [
          t.Literal("Monday"),
          t.Literal("Tuesday"),
          t.Literal("Wednesday"),
          t.Literal("Thursday"),
          t.Literal("Friday"),
          t.Literal("Saturday"),
          t.Literal("Sunday"),
        ],
        { additionalProperties: false },
      ),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const SchedulePlainInputUpdate = t.Object(
  {
    classesName: t.Optional(
      t.Union(
        [
          t.Literal("Bugs"),
          t.Literal("Birds"),
          t.Literal("Beasts"),
          t.Literal("SuperBeasts"),
          t.Literal("FunnyBugs"),
          t.Literal("GiggleWorms"),
          t.Literal("GoodFriends"),
          t.Literal("FlipsHotshots"),
        ],
        { additionalProperties: false },
      ),
    ),
    ages: t.Optional(__nullable__(t.String())),
    monday: t.Optional(__nullable__(t.String())),
    tuesday: t.Optional(__nullable__(t.String())),
    wednesday: t.Optional(__nullable__(t.String())),
    thursday: t.Optional(__nullable__(t.String())),
    friday: t.Optional(__nullable__(t.String())),
    saturday: t.Optional(__nullable__(t.String())),
    sunday: t.Optional(__nullable__(t.String())),
    days: t.Optional(
      t.Union(
        [
          t.Literal("Monday"),
          t.Literal("Tuesday"),
          t.Literal("Wednesday"),
          t.Literal("Thursday"),
          t.Literal("Friday"),
          t.Literal("Saturday"),
          t.Literal("Sunday"),
        ],
        { additionalProperties: false },
      ),
    ),
    updatedAt: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const ScheduleRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ScheduleRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const ScheduleWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          classesName: t.Union(
            [
              t.Literal("Bugs"),
              t.Literal("Birds"),
              t.Literal("Beasts"),
              t.Literal("SuperBeasts"),
              t.Literal("FunnyBugs"),
              t.Literal("GiggleWorms"),
              t.Literal("GoodFriends"),
              t.Literal("FlipsHotshots"),
            ],
            { additionalProperties: false },
          ),
          ages: t.String(),
          monday: t.String(),
          tuesday: t.String(),
          wednesday: t.String(),
          thursday: t.String(),
          friday: t.String(),
          saturday: t.String(),
          sunday: t.String(),
          days: t.Union(
            [
              t.Literal("Monday"),
              t.Literal("Tuesday"),
              t.Literal("Wednesday"),
              t.Literal("Thursday"),
              t.Literal("Friday"),
              t.Literal("Saturday"),
              t.Literal("Sunday"),
            ],
            { additionalProperties: false },
          ),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Schedule" },
  ),
);

export const ScheduleWhereUnique = t.Recursive(
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
              classesName: t.Union(
                [
                  t.Literal("Bugs"),
                  t.Literal("Birds"),
                  t.Literal("Beasts"),
                  t.Literal("SuperBeasts"),
                  t.Literal("FunnyBugs"),
                  t.Literal("GiggleWorms"),
                  t.Literal("GoodFriends"),
                  t.Literal("FlipsHotshots"),
                ],
                { additionalProperties: false },
              ),
              ages: t.String(),
              monday: t.String(),
              tuesday: t.String(),
              wednesday: t.String(),
              thursday: t.String(),
              friday: t.String(),
              saturday: t.String(),
              sunday: t.String(),
              days: t.Union(
                [
                  t.Literal("Monday"),
                  t.Literal("Tuesday"),
                  t.Literal("Wednesday"),
                  t.Literal("Thursday"),
                  t.Literal("Friday"),
                  t.Literal("Saturday"),
                  t.Literal("Sunday"),
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
  { $id: "Schedule" },
);

export const ScheduleSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      classesName: t.Boolean(),
      ages: t.Boolean(),
      monday: t.Boolean(),
      tuesday: t.Boolean(),
      wednesday: t.Boolean(),
      thursday: t.Boolean(),
      friday: t.Boolean(),
      saturday: t.Boolean(),
      sunday: t.Boolean(),
      days: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ScheduleInclude = t.Partial(
  t.Object(
    { classesName: t.Boolean(), days: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ScheduleOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ages: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      monday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tuesday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      wednesday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      thursday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      friday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      saturday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sunday: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Schedule = t.Composite([SchedulePlain, ScheduleRelations], {
  additionalProperties: false,
});

export const ScheduleInputCreate = t.Composite(
  [SchedulePlainInputCreate, ScheduleRelationsInputCreate],
  { additionalProperties: false },
);

export const ScheduleInputUpdate = t.Composite(
  [SchedulePlainInputUpdate, ScheduleRelationsInputUpdate],
  { additionalProperties: false },
);

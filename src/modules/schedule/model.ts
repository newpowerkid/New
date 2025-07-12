import { t } from 'elysia'
import { ClassName } from "../../generated/prisma";

export const scheduleModel = t.Object({
  classesName: t.Enum(ClassName),
  ages: t.String(),
  monday: t.Optional(t.String()),
  tuesday: t.Optional(t.String()),
  wednesday: t.Optional(t.String()),
  thursday: t.Optional(t.String()),
  friday: t.Optional(t.String()),
  saturday: t.Optional(t.String()),
  sunday: t.Optional(t.String()),
})

export const scheduleUpdateModel = t.Composite([
  t.Object({ id: t.String({ format: 'uuid' }) }),
  scheduleModel,
])

export type ScheduleInput = typeof scheduleModel.static
export type ScheduleUpdateInput = typeof scheduleUpdateModel.static
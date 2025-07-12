import { t } from 'elysia'

export namespace AuthModel {
  export const signInBody = t.Object({
    email: t.String({ format: 'email' }),
    name: t.Optional(t.String()),
    image: t.Optional(t.String()),
  })

  export type SignInBody = typeof signInBody.static

  export const sessionUser = t.Object({
    id: t.String(),
    email: t.Optional(t.String()),
    name: t.Optional(t.String()),
    image: t.Optional(t.String()),
    role: t.String(),
    openForm: t.String(),
    address: t.Optional(t.String()),
  })

  export type SessionUser = typeof sessionUser.static
}

export interface BetterAuthUser {
  id?: string
  email?: string
  name?: string
  image?: string
  provider: string
  providerAccountId: string
}



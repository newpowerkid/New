import { UserRole, OpenForm } from 'src/generated/prisma'

declare module 'elysia' {
  interface ElysiaContext {
    user: {
      id: string
      role: UserRole
      openForm?: OpenForm
      address?: string
    } | null

    isAuthenticated: boolean
    isAdmin: boolean
    isCustomer: boolean
    isOwner: boolean
  }
}

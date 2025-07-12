import { Elysia } from 'elysia'
import jwt from '@elysiajs/jwt'
import { bearer } from '@elysiajs/bearer'
import { UserRole, OpenForm } from 'src/generated/prisma/client'


type JwtPayload = {
  id: string
  role: UserRole
  openForm?: OpenForm
  address?: string
}

export type AuthContext = {
  user: JwtPayload | null
  isAuthenticated: boolean
  isAdmin: boolean
  isCustomer: boolean
  isOwner: boolean
}

export const authPlugin = new Elysia({ name: 'auth' })
  .use(bearer()) // <--- ใช้ plugin bearer
  .use(jwt({
    name: 'jwt',
    secret: process.env.AUTH_SECRET!,
  }))
  .derive(async ({ jwt, bearer }) => {
    let user: JwtPayload | null = null

    if (bearer) {
      try {
        const decoded = await jwt.verify(bearer)
        if (decoded && typeof decoded === 'object') {
          user = decoded as JwtPayload
        }
      } catch (error) {
        console.error('JWT verification failed:', error)
      }
    }

    return {
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'ADMIN',
      isCustomer: user?.role === 'CUSTOMER',
      isOwner: user?.role === 'OWNER',
    }
  })

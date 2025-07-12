import { PrismaClient, UserRole, OpenForm } from "../../generated/prisma";

const prisma = new PrismaClient();

export const AuthService = {
  async findOrCreateUser(user: any) {
    if (!user.email) {
      let linkedAccount = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: user.provider,
            providerAccountId: user.providerAccountId,
          },
        },
        include: { user: true },
      });
      if (linkedAccount) return linkedAccount.user;
      return await prisma.user.create({
        data: {
          name: user.name ?? "LINE User",
          image: user.image ?? null,
          role: UserRole.USER,
          openForm: OpenForm.CLOSE,
        },
      });
    } else {
      let existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });
      if (existingUser) return existingUser;
      return await prisma.user.create({
        data: {
          email: user.email,
          name: user.name ?? "User",
          image: user.image ?? null,
          role: UserRole.USER,
          openForm: OpenForm.CLOSE,
        },
      });
    }
  },

  async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  async jwt(token: any, user: any) {
    if (user) {
      token.id = user.id;
      token.role = user.role;
      token.openForm = user.openForm;
      token.address = user.address;
    }
    return token;
  },

  async session(session: any, token: any) {
    if (session.user) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.openForm = token.openForm;
      session.user.address = token.address;
    }
    return session;
  },
};

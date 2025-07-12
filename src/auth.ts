import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "src/libs/db";
import { AuthService } from "./modules/auth/service";
import { BetterAuthUser } from "./modules/auth/model";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  providers: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    line: {
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
      authorization: {
        url: "https://access.line.me/oauth2/v2.1/authorize",
        params: {
          scope: "openid profile email",
          response_type: "code",
          state: "random_generated_state",
          prompt: "consent",
        },
      },
      checks: ["pkce", "state"],
    },
  },
  callbacks: {
    signIn: async ({ user }: { user: BetterAuthUser }) => {
      await AuthService.findOrCreateUser(user);
      return true;
    },
    jwt: AuthService.jwt,
    session: AuthService.session,
  },
});
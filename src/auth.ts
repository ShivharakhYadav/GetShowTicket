import axios from "axios";
import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

import { NEXT_AUTH_SECRET } from "./config/envs";
import { apiRoutes } from "./config/apiRoutes";

/* eslint-disable @typescript-eslint/no-explicit-any */

class InvalidLoginError extends AuthError {
  code = "custom";
  errorMessage: string;
  constructor(message?: any, errorOptions?: any) {
    super(message, errorOptions);
    this.errorMessage = message;
    this.stack = undefined;
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data: user } = await axios.post(apiRoutes.login, {
            email: credentials?.email,
            password: credentials?.password,
          });
          if (user) {
            return user.data;
          } else {
            return null;
          }
        } catch (e: any) {
          throw new InvalidLoginError(e.response?.data?.message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as JWT["user"];
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: NEXT_AUTH_SECRET,
});

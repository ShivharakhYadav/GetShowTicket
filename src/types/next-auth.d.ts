// next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

// Extend the default user object returned by NextAuth.js
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}

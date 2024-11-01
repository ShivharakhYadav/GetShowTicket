// next-auth.d.ts
import { DefaultSession } from "next-auth";

// Extend the default user object returned by NextAuth.js
export declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      username: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }

  interface User {
    _id: string;
    email: string;
    username: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: {
      _id: string;
      email: string;
      username: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}

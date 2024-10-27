// next-auth.d.ts
import { DefaultSession } from "next-auth";

// Extend the default user object returned by NextAuth.js
export declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: {
      id: string;
      email: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}

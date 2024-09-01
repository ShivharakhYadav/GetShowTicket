import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { NEXT_AUTH_SECRET } from "./config/envs";
import { LoginResponse } from "./types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post<LoginResponse>(
            "http://localhost:4100/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );
          const user = response.data;
          if (user && user.success) {
            return user.data;
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: NEXT_AUTH_SECRET,
});

import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { NEXT_AUTH_SECRET } from "./config/envs";
import { apiRoutes } from "./config/apiRoutes";

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
          const { data: user } = await axios.post(apiRoutes.login, {
            email: credentials?.email,
            password: credentials?.password,
          });
          if (user) {
            return user;
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

import { User as NextAuthUser } from "next-auth";

// Extend NextAuth User type
export type CustomUser = NextAuthUser & {
  id: string;
  role?: string;
};

export type LoginResponse = {
  data: CustomUser;
  success: boolean;
};

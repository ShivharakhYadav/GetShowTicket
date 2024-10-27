"use server";
import { signIn } from "@/auth";
import appRoutes from "@/config/appRoutes";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function authenticate(email: string, password: string) {
  try {
    return await signIn("credentials", {
      email,
      password,
      callbackUrl: appRoutes.home,
      redirect: false,
    });
  } catch (error: any) {
    return { error: error.errorMessage };
  }
}

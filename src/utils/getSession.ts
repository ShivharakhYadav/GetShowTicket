import { Session } from "next-auth";
import { cache } from "react";

import { auth } from "@/auth";

// Cache the auth call for each request lifecycle
export const getSession = cache(async (): Promise<Session | null> => {
  return (await auth()) as Session | null;
});

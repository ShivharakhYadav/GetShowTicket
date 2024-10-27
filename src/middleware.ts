import { NextResponse } from "next/server";

import { auth } from "./auth";
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function middleware(req: any) {
  const sessionToken = await auth();

  const { pathname } = req.nextUrl;

  // List of authentication routes
  const authRoutes = ["/login", "/register", "/forgot-password"];

  // If user is logged in and tries to access auth routes, redirect them
  if (sessionToken && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to the homepage or another page
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Specify the paths that should trigger this middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

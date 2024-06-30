"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { CircleUser, Menu, Package2 } from "lucide-react";
import "./globals.css";
import { usePathname } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layouts/Footer";
import AuthLayout from "@/components/layouts/AuthLayout";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  if (["/login", "/register"].includes(pathname)) {
    return <AuthLayout {...{ children }} />;
  }
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <nav className="flex hidden gap-5 text-lg font-medium md:flex md:items-center md:text-sm lg:gap-6">
                <Link
                  href="/"
                  className={`transition-colors ${pathname === "/" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/seat-booking"
                  className={`transition-colors ${pathname === "/seat-booking" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                >
                  Seat Booking
                </Link>
              </nav>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="/"
                    className={`hover:text-foreground ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/seat-booking"
                    className={`hover:text-foreground ${pathname === "/seat-booking" ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    Seat Booking
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="relative ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="right-0">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main>{children}</main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() =>
  import("@/components/theme/theme-toggle").then((mod) => mod.ThemeToggle)
);

import { menuItems } from "./consts";

const Nav = () => {
  const pathname = usePathname();
  const isAuthRoute = ["/login", "/register"].includes(pathname);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <>
      <nav className="fixed z-20 h-[69px] w-full bg-background p-4">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Get Show Tickets
          </Link>
          {!isAuthRoute &&
            menuItems.map(({ url, label }) => (
              <Link
                key={label}
                href={url}
                className={`block rounded p-2 ${
                  url === pathname ||
                  (url.startsWith("/dashboard") &&
                    pathname.startsWith("/dashboard"))
                    ? "font-semibold"
                    : "text-gray-500"
                }`}
              >
                {label}
              </Link>
            ))}
          <header>
            {loaded ? (
              <ThemeToggle />
            ) : (
              <span className="animate-pulse">...</span>
            )}
          </header>
        </div>
      </nav>
      <div className="relative h-[69px] w-full"></div>
    </>
  );
};

export default Nav;

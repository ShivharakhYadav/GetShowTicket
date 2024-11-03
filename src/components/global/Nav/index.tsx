"use client";

import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() =>
  import("@/components/theme/theme-toggle").then((mod) => mod.ThemeToggle)
);

// import { menuItems } from "./consts";
import { UserNav } from "../UserNav";

const Nav = () => {
  // const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <nav className="fixed z-20 h-[69px] w-full bg-gray-900 p-4 shadow-lg transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white"
          >
            Get Show Tickets
          </Link>

          {/* Center: Navigation Links */}
          {/* <div className="flex space-x-4">
            {menuItems.map(({ url, label }) => (
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
          </div> */}

          {/* Right: Theme Toggle and UserNav */}
          <div className="ml-auto flex items-center space-x-4">
            {loaded ? (
              <ThemeToggle />
            ) : (
              <span className="animate-pulse">...</span>
            )}
            <UserNav />
          </div>
        </div>
      </nav>

      {/* Spacer to push content below the fixed nav */}
      <div className="relative h-[69px] w-full"></div>
    </>
  );
};

export default Nav;

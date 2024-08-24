import { Inter as FontSans } from "next/font/google";
import { FC } from "react";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
// import Footer from "@/components/global/Footer";
import Nav from "@/components/global/Nav";
import { Children } from "@/types";
import Footer from "@/components/global/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Get Show Tickets",
  description:
    "Get Show Tickets is your ultimate platform for discovering and purchasing tickets for the latest concerts, theater productions, and live events. Experience seamless ticket booking with user-friendly features and secure transactions.",
};

const RootLayout: FC<Children> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

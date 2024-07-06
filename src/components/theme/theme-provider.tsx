"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  // Add any other props that NextThemesProvider accepts if needed
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  forcedTheme?: string;
  themes?: string[];
  disableTransitionOnChange?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

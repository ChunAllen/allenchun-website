"use client";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"        // puts "dark" class on <html>
      defaultTheme="system"
      enableSystem
      enableColorScheme        // updates CSS color-scheme for form controls, etc.
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
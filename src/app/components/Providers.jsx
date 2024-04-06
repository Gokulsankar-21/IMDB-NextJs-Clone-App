"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="text-gray-700 dark:text-gray-200 dark:bg-gray-700
      min-h-screen select-none transition-colors duration-300 "
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
/**
 * ThemeProvider is component - has useContext() Hook
 * ithu system la ena mode iruku nu detect panni global ah access pannidum
 *
 *  attribute - class nu kudukurom
 * ithu dark mode class ah enable pandorm in tailwind css
 *
 * tailwind css la - next-themes oda enable pannita nala
 * dark mode athu default ah bg-black and text-white ah mathidum
 *
 * @Technique
 * light mode - text color - text-gray-700
 * dark mode  - bg color - text-gray-700 contrast ah irukum
 * consistent ah look aah irukum
 */

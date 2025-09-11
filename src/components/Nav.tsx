"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur transition-colors dark:bg-gray-900/60">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold hover:opacity-80 transition">Allen Chun</Link>

        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="hover:opacity-70 transition-colors" href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 border transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-800"
          >
            {mounted && resolvedTheme === "dark" ? (
              <FiSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
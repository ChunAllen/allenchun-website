"use client";

import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur transition-colors dark:bg-gray-900/60">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold hover:opacity-80 transition">
          Allen Chun
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="hover:opacity-70 transition-colors" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

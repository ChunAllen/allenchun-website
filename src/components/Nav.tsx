"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur transition-colors">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
         <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Allen Chun"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="hover:opacity-70 transition-colors" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  className="block text-center hover:opacity-70 transition-colors"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
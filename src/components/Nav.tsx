import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">allen.dev</Link>
        <ul className="flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link className="hover:opacity-70" href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
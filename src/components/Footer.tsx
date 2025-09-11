export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Allen Chun — Built with Next.js, TS & Tailwind
      </div>
    </footer>
  );
}
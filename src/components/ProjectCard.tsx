import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow transition">
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.title} className="rounded-xl mb-3 w-full object-cover h-44" />
      )}
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{p.summary}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {p.tags.map(t => (
          <span key={t} className="text-xs border rounded-full px-2 py-0.5">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-4 text-sm">
        <Link href={`/projects/${p.slug}`} className="underline">Details</Link>
        {p.link && <a className="underline" href={p.link} target="_blank">Live</a>}
        {p.repo && <a className="underline" href={p.repo} target="_blank">Code</a>}
      </div>
    </article>
  );
}

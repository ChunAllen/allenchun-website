import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return notFound();
  return (
    <article className="py-10 prose max-w-none">
      <h1>{p.title}</h1>
      {p.image && <img src={p.image} alt={p.title} />}
      <p>{p.summary}</p>
      <ul>
        {p.tags.map(t => <li key={t}>{t}</li>)}
      </ul>
      {p.link && <p><a href={p.link}>Live</a></p>}
    </article>
  );
}
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import Link from "next/link";
import { GrView } from "react-icons/gr";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  // Normalize to an array for the gallery
  const gallery = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);

  return (
    <article className="py-10">
      <div className="mx-auto max-w-4xl px-4">
        {/* Title + meta */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{p.title}</h1>
        </header>

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mb-8">
            <ProjectGallery images={gallery} />
          </div>
        )}

        {/* Summary */}
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">{p.summary}</p>

        {/* Tags */}
        {p.tags?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {(p.link) && (
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {p.link && (
              <Link
                href={p.link}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-blue-600 
                        text-blue-600 text-sm font-medium 
                        hover:bg-blue-600 hover:text-white transition-colors">
                <GrView className="w-5 h-5" />
                View Project
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

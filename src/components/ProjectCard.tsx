import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">

      {p.image ? (
        <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-video grid place-items-center bg-gray-100 dark:bg-gray-800 text-sm text-gray-500">
          No image
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {p.summary}
        </p>

        {/* Links */}
        {(p.link) && (
          <div className="mt-4 flex gap-4 text-sm font-medium">
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                View Showcase
              </a>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

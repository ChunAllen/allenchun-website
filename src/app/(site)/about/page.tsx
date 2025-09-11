// src/app/(site)/about/page.tsx
import Image from "next/image";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:gap-10">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/images/profile.jpg"
            alt={about.name}
            width={220}
            height={220}
            className="rounded-full object-cover shadow-lg border"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-3xl font-bold">{about.name}</h1>
          <h2 className="text-lg text-gray-600 mt-1">{about.title}</h2>
           {/* Social Links */}
          <div className="flex gap-4 mt-6 flex-wrap">
            {about.socials.github && (
              <a
                href={about.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-blue-600"
              >
                GitHub
              </a>
            )}
            {about.socials.linkedin && (
              <a
                href={about.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-blue-600"
              >
                LinkedIn
              </a>
            )}
            {about.socials.behance && (
              <a
                href={about.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-blue-600"
              >
                Behance
              </a>
            )}
            {about.socials.medium && (
              <a
                href={about.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-blue-600"
              >
                Medium
              </a>
            )}
            <a
              href={`mailto:${about.socials.email}`}
              className="text-sm underline hover:text-blue-600"
            >
              Email
            </a>
          </div>
          
          <p className="mt-4 leading-relaxed text-gray-700 whitespace-pre-line">
            {about.summary}
          </p>

        </div>
      </div>
    </div>
  );
}

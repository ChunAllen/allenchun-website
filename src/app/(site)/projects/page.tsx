import Link from "next/link";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const top = projects.slice(0, 3);
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Hi, I’m Allen 👋</h1>
      <p className="text-gray-600 mt-3 max-w-2xl">
        Senior full-stack engineer. I build performant platforms and delightful admin tooling.
      </p>

      <Section title="Featured Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-6">
          <Link className="underline" href="/projects">See all projects →</Link>
        </div>
      </Section>
    </div>
  );
}
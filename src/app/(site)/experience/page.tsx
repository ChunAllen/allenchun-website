import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        {experience.map((r, i) => (
          <section key={i} className="border rounded-2xl p-4">
            <h2 className="font-semibold">{r.title} · {r.company}</h2>
            <p className="text-sm text-gray-600">{r.start} – {r.end ?? "Present"}</p>
            <ul className="list-disc ml-5 mt-2">
              {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            {r.tech && <p className="text-sm mt-2">Tech: {r.tech.join(", ")}</p>}
          </section>
        ))}
      </div>
    </div>
  );
}

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div className="space-y-8">
      {skills.map((group) => (
        <div key={group.key}>
          <h3 className="text-lg font-semibold mb-3">{group.key}</h3>
          <div className="flex flex-wrap gap-2">
            {group.values.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full border bg-gray-50 text-gray-700 
                           hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
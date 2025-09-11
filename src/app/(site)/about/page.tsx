import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="py-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Skills</h1>
        <Skills />
      </div>

      <div className="py-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Experience</h1>
        <WorkExperience />
      </div>
    </div>
  );
}

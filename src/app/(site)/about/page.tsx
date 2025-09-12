import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import { about } from "@/data/about"
import { FiDownload } from "react-icons/fi"; 
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="py-10 max-w-4xl mx-auto">
        <p className="text-gray-700 mt-4 text-2xl font-medium leading-relaxed max-w-2xl">
          {about.tagline}
        </p>
      </div>

      <div className="py-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Skills</h1>
        <Skills />
      </div>

      <div className="py-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Work Experience</h1>
          <Link
            href="https://drive.google.com/file/d/1CgmgFo3RBuZnJAJkhte0ag0QAqGzFJmD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-blue-600 
                      text-blue-600 text-sm font-medium 
                      hover:bg-blue-600 hover:text-white transition-colors"
          >
            <FiDownload className="w-4 h-4" /> {/* smaller icon */}
            Download Resume
          </Link>
        </div>
        <WorkExperience />
      </div>
    </div>
  );
}

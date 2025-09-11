export type Role = {
  company: string;
  title: string;
  start: string;   // "2021-06"
  end?: string;    // "Present"
  bullets: string[];
  tech?: string[];
};

export const experience: Role[] = [
  {
    company: "Synapxe Pte Ltd",
    title: "Senior Systems Analyst",
    start: "2021-01",
    end: "Present",
    bullets: [
      "Led buildout of versioned POI platform with approval workflows.",
      "Optimized ingestion pipelines (FormSG, S3, SFTP) and RAG search."
    ],
    tech: ["Rails", "Vue", "AWS", "Postgres"],
  },
];
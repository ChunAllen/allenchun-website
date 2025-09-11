export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;      // live demo / app
  repo?: string;      // GitHub
  image?: string;     // public/images/...
};

export const projects: Project[] = [
  {
    slug: "poi-cms",
    title: "POI CMS for Tourism",
    summary: "Versioned POI ingestion, approvals, embeddings & search.",
    tags: ["Rails", "Postgres", "AWS", "RAG"],
    link: "https://example.com",
    repo: "https://github.com/you/poi-cms",
    image: "/images/poi-cms.png",
  },
  // add more...
];
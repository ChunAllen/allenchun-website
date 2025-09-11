// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year?: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "stb-content-suite",
    title: "Singapore Tourism Content Suite",
    summary:
      "Architected and led backend development to support scalable, dynamic POI types (events, attractions, tours). Built automated ingestion pipelines from websites, FormSG, and email parsing. Improved efficiency by streamlining content workflows, reducing turnaround time for STB stakeholders.",
    tags: ["Ruby on Rails", "PostgreSQL", "AWS", "Data Pipelines", "CMS"],
    year: "2017–Present",
  },
  {
    slug: "svc-lite",
    title: "Singapore Visitor Centre Lite",
    summary:
      "Tablet-based application delivering itineraries, curated guides, and FAQs. Developed CMS and API on AWS Serverless. Reduced repetitive inquiries and boosted staff efficiency by enabling visitor self-service.",
    tags: ["Vue.js", "AWS Serverless", "API", "CMS"],
    year: "2019–2022",
  },
  {
    slug: "e-visitor-auth",
    title: "E-Visitor Authentication",
    summary:
      "Designed and implemented a secure API to transmit traveller and accommodation data between hotels, STB, and ICA. Provided integration support and documentation. Enhanced compliance and data integrity by validating guest information prior to submission.",
    tags: ["API", "Security", "Ruby on Rails", "AWS"],
    year: "2020–2021",
  },
  {
    slug: "visit-singapore-kiosk",
    title: "Visit Singapore Kiosk & CMS",
    summary:
      "Led architecture of a scalable kiosk system using Vue.js + Electron with a centralized Rails CMS. Delivered real-time curated events and attractions across nationwide kiosks, improving tourist engagement and Visitor Centre efficiency.",
    tags: ["Vue.js", "Electron", "Ruby on Rails", "CMS"],
    year: "2018–2019",
  },
  {
    slug: "travel-guide",
    title: "Visit Singapore Travel Guide",
    summary:
      "Built CMS-driven mobile app with Vue.js frontend and AWS Serverless backend. Delivered personalized recommendations and improved Visitor Centre service efficiency by reducing repetitive inquiries.",
    tags: ["Vue.js", "AWS Serverless", "CMS", "Mobile"],
    year: "2018–2019",
  },
  {
    slug: "calltree",
    title: "CALLTREE (Crisis Management System)",
    summary:
      "Developed web-based app to automate SMS, Email, and Telegram notifications. Strengthened STB’s operational readiness by streamlining mass communication workflows for faster crisis response.",
    tags: ["Ruby on Rails", "Messaging", "Ops"],
    year: "2019–2020",
  },
];

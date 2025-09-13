export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "visit-singapore-kiosk",
    title: "Visit Singapore Kiosk & CMS",
    image: "/images/projects/vs_kiosk/1) Home Screen.png",
    link: "https://www.behance.net/gallery/94533023/Visit-Singapore-Kiosk",
    summary:
      "Led architecture of a scalable kiosk system using Vue.js + Electron with a centralized Rails CMS. Delivered real-time curated events and attractions across nationwide kiosks, improving tourist engagement and Visitor Centre efficiency.",
    tags: ["Vue.js", "Electron", "Ruby on Rails", "CMS"]
  },
  {
    slug: "svc-lite",
    title: "Singapore Visitor Centre Lite",
    image: "/images/projects/svc_lite/SVCL_GDA_Slides-1.jpg",
    link: "https://www.behance.net/gallery/234475179/Singapore-Visitor-Centre-Lite",
    summary:
      "Tablet-based application delivering itineraries, curated guides, and FAQs. Developed CMS and API on AWS Serverless. Reduced repetitive inquiries and boosted staff efficiency by enabling visitor self-service.",
    tags: ["Vue.js", "AWS Serverless", "API", "CMS"]
  },
  {
    slug: "travel-guide",
    title: "Visit Singapore Travel Guide",
    summary:
      "Built CMS-driven mobile app with Vue.js frontend and AWS Serverless backend. Delivered personalized recommendations and improved Visitor Centre service efficiency by reducing repetitive inquiries.",
    tags: ["Vue.js", "AWS Serverless", "CMS", "Mobile"]
  },
  {
    slug: "stb-content-suite",
    title: "Singapore Tourism Content Suite",
    summary:
      "Architected and led backend development to support scalable, dynamic POI types (events, attractions, tours). Built automated ingestion pipelines from websites, FormSG, and email parsing. Improved efficiency by streamlining content workflows, reducing turnaround time for STB stakeholders.",
    tags: ["Ruby on Rails", "PostgreSQL", "AWS", "Data Pipelines", "CMS"]
  },
  {
    slug: "e-visitor-auth",
    title: "E-Visitor Authentication",
    summary:
      "Designed and implemented a secure API to transmit traveller and accommodation data between hotels, STB, and ICA. Provided integration support and documentation. Enhanced compliance and data integrity by validating guest information prior to submission.",
    tags: ["API", "Security", "Ruby on Rails", "AWS"]
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

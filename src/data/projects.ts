export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
  image?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "visit-singapore-kiosk",
    title: "Visit Singapore Kiosk & CMS",
    image: "/images/projects/vs_kiosk/1) Home Screen.png",
    images: [
      "/images/projects/vs_kiosk/1) Home Screen.png",
      "/images/projects/vs_kiosk/2) Orchard Precinct.png",
      "/images/projects/vs_kiosk/3) About POI.png",
      "/images/projects/vs_kiosk/4) Navigating to POI.png",
      "/images/projects/vs_kiosk/5) All Events filtered by months.png",
      "/images/projects/vs_kiosk/6) Search Screen.png",
      "/images/projects/vs_kiosk/7) Search Result Screen.png",
      "/images/projects/vs_kiosk/8) Favorites.png",
      "/images/projects/vs_kiosk/GPSS.png",
      "/images/projects/vs_kiosk/GPSS Events.png",
      "/images/projects/vs_kiosk/GPSS Promotions.png",
    ],
    link: "https://medium.com/@allenchun/building-an-interactive-kiosk-using-vue-js-electron-e3989503ee37",
    summary:
      "Led the development of a scalable kiosk system using Vue.js + Electron with a centralized CMS built using Vue.js and Ruby on Rails. Delivered real-time curated events and attractions across nationwide kiosks, improving tourist engagement and Visitor Centre efficiency.",
    tags: ["Vue.js", "Electron", "Ruby on Rails", "CMS", "Docker", "Vuetify", "Navigation", "Microservices"]
  },
  {
    slug: "svc-lite",
    title: "Singapore Visitor Centre Lite",
    image: "/images/projects/svc_lite/SVCL_GDA_Slides-1.jpg",
    images: [
      "/images/projects/svc_lite/SVCL_GDA_Slides-1.jpg",
      "/images/projects/svc_lite/SVCL_GDA_Slides-2.jpg",
      "/images/projects/svc_lite/SVCL_GDA_Slides-3.jpg",
      "/images/projects/svc_lite/SVCL_GDA_Slides-5 – 1.jpg",
      "/images/projects/svc_lite/SVCL_GDA_Slides-5.jpg",
      "/images/projects/svc_lite/SVCL_GDA_Slides-6.jpg",
    ],
    link: "https://www.behance.net/gallery/234475179/Singapore-Visitor-Centre-Lite",
    summary:
      `Tablet-based application delivering itineraries, curated guides, and FAQs. Developed CMS and API on AWS Serverless. Reduced repetitive inquiries and boosted staff efficiency by enabling visitor self-service.
      I led the development of Content Management System (CMS) and API leveraging AWS Serverless architecture for scalability and efficiency.
      `,
    tags: ["Node.js", "Lambda", "DynamoDB", "API Gateway", "Vue.js", "Serverless Framework", "API", "CMS"]
  },
  {
    slug: "stb-content-suite",
    title: "Singapore Tourism Content Suite",
    image: "/images/projects/stcs/home.png",
    images: [
      "/images/projects/stcs/home.png",
      "/images/projects/stcs/events.png",
      "/images/projects/stcs/poi-view.png",
    ],
    link: "https://www.behance.net/gallery/234521651/Singapore-Tourism-Content-Suite",
    summary:
      `Developed a Content Management System (CMS) and API leveraging AWS
      Serverless architecture for scalability and efficiency. Led backend development to support scalable, dynamic POI types (events, attractions, tours). Built automated ingestion pipelines from websites, FormSG, and email parsing. Improved efficiency by streamlining content workflows, reducing turnaround time for STB stakeholders.`,
    tags: ["Ruby on Rails", "PostgreSQL", "AWS", "Data Pipelines", "CMS"]
  },
  {
    slug: "travel-guide",
    title: "Visit Singapore Travel Guide",
    summary:
      "Built CMS-driven mobile app with Vue.js frontend and AWS Serverless backend. Delivered personalized recommendations and improved Visitor Centre service efficiency by reducing repetitive inquiries.",
    tags: ["Vue.js", "AWS Serverless", "CMS", "Mobile"]
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
    tags: ["Ruby on Rails", "Messaging", "Ops"]
  },
];

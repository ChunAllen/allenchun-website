export type Role = {
  company: string;
  title: string;
  start: string;   // "YYYY-MM"
  end?: string;    // "YYYY-MM" or "Present"
  bullets: string[];
  tech?: string[];
};

export const experience: Role[] = [
  {
    company: "Singapore Tourism Board",
    title: "Senior Manager & Full Stack Developer",
    start: "2017-04",
    end: "Present",
    bullets: [
      "Led design thinking sessions to drive rapid prototyping and validate solutions with stakeholders.",
      "Architected and delivered multiple production-grade, government-compliant applications.",
      "Translated business requirements into scalable technical designs, ensuring security and performance.",
      "Directed development of high-impact systems such as the Singapore Tourism Content Suite, Visitor Centre Lite, Visit Singapore Kiosk, E-Visitor Authentication, Travel Guide, and CallTree (crisis comms)."
    ],
    tech: [
      "Ruby on Rails",
      "Vue.js",
      "Node.js",
      "PostgreSQL",
      "AWS (Lambda, API Gateway, ECS, DynamoDB, S3, CloudWatch)",
      "Docker",
      "Redis",
      "CI/CD"
    ],
  },
  {
    company: "Soho Property Pte Ltd Singapore",
    title: "Freelance Software Engineer",
    start: "2021-09",
    end: "2023-01",
    bullets: [
      "Developed APIs, web scraping features, and subscription services for Restocq website.",
      "Integrated and migrated data from acquired homesales.com.au into Soho’s property platform."
    ],
    tech: ["Ruby on Rails", "JavaScript", "Web scraping", "APIs", "PostgreSQL"],
  },
  {
    company: "Tinkerbox Studios Pte Ltd Singapore",
    title: "Full Stack Software Engineer",
    start: "2016-02",
    end: "2017-02",
    bullets: [
      "Developed and maintained Tinkerdex, the company’s internal system for managing sales, project workflows, and team operations."
    ],
    tech: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Heroku"],
  },
  {
    company: "Proudcloud Inc. Philippines",
    title: "Software Engineer",
    start: "2013-09",
    end: "2016-01",
    bullets: [
      "Led project teams to deliver high-quality web and mobile applications for various clients.",
      "Applied Extreme Programming practices to adapt to evolving client requirements.",
      "Conducted training sessions on effective software development and best practices."
    ],
    tech: ["Ruby on Rails", "Backbone.js", "MySQL", "MongoDB", "Elasticsearch"],
  },
  {
    company: "AppSource Inc. Philippines",
    title: "Web & Mobile Applications Developer",
    start: "2012-05",
    end: "2013-09",
    bullets: [
      "Conducted R&D and implemented key features for a Restaurant Management Application, including collaboration, reports, and purchasing modules."
    ],
    tech: ["Ruby on Rails", "JavaScript", "MySQL"],
  }
];
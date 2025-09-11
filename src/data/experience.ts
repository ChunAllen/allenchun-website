export type Role = {
  company: string;
  title: string;
  start: string;
  end?: string;
  logo: string;
  link: string
};

export const experience: Role[] = [
  {
    company: "Singapore Tourism Board",
    title: "Senior Manager & Full Stack Developer",
    start: "2017",
    end: "Present",
    logo: "images/experiences/stb.png",
    link: "https://www.visitsingapore.com/"
  },
  {
    company: "Soho Property Pte Ltd Singapore",
    title: "Freelance Software Engineer",
    start: "2021",
    end: "2023",
    logo: "images/experiences/soho.png",
    link: "https://soho.com.au/"
  },
  {
    company: "Tinkerbox Studios Pte Ltd Singapore",
    title: "Full Stack Software Engineer",
    start: "2016",
    end: "2017",
    logo: "images/experiences/tinkerbox.webp",
    link: "http://www.tinkerbox.com.sg/"
  },
  {
    company: "Proudcloud Philippines",
    title: "Software Engineer",
    start: "2013",
    end: "2016",
    logo: "images/experiences/proudcloud.webp",
    link: "https://proudcloud.io/"
  },
  {
    company: "Talentium Inc Philippines",
    title: "Web & Mobile Applications Developer",
    start: "2012",
    end: "2013",
    logo: "images/experiences/talentium.jpeg",
    link: "http://www.talentium.ph/"
  }
];
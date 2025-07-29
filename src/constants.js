// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import trainityLogo from "./assets/company_logo/trainity.png";
import nexsalesLogo from "./assets/company_logo/nexsales.png";

// Education Section Logo's
import ryanLogo from "./assets/education_logo/ryan.png";
import wilsonLogo from "./assets/education_logo/wilson.png";
import xieLogo from "./assets/education_logo/xie.png";

// Project Section Logo's
import pgApi from "./assets/work_logo/pgapi.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: nexsalesLogo, // You can assign a company logo if available
    role: "Software Developer",
    company: "Nexsales Solutions Pvt. Ltd.",
    date: "Aug 2023 – Present",
    desc: "Built production-grade backend and frontend features, including Campaign Execution, GenAI-based email parsing, and dynamic dropdown UIs. Focused on performance optimization, security, and testing.",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "JavaScript",
      "Mocha",
      "Chai",
      "Sinon",
      "Linux",
      "GCP",
      "REST APIs",
      "Docker",
    ],
  },
  {
    id: 1,
    img: "", // Assign MyCryptoMart logo if available
    role: "Web Developer Intern",
    company: "MyCryptoMart",
    date: "Dec 2021 – May 2022",
    desc: "Developed backend APIs and converted UI mockups into responsive EJS-based pages integrated with the OpenSeas platform.",
    skills: ["JavaScript", "Node.js", "EJS", "HTML", "CSS"],
  },
  {
    id: 2,
    img: trainityLogo, // Assign Trainity logo if available
    role: "Software Developer Intern",
    company: "Trainity (Remote)",
    date: "Sep 2021 – Nov 2021",
    desc: "Built full-stack apps using Node.js and MongoDB with deployment and RESTful API integrations.",
    skills: ["Node.js", "MongoDB", "HTML", "CSS", "REST APIs"],
  },
];

export const education = [
  {
    id: 0,
    img: xieLogo,
    school: "Xaviers Institute of Engineering, Mumbai",
    date: "2019 - 2023",
    grade: "8.15 CGPA",
    desc: "I have completed my Bachelor of Engineering in Information Technology from Xaviers Institute of Engineering, Mumbai. During my time there, I gained a solid foundation in software development and engineering principles as well a a broad understanding of various technologies.",
    degree: "Bachelor of Engineering in Information Technology - BEIT",
  },
  {
    id: 1,
    img: wilsonLogo,
    school: "Wilson College, Mumbai",
    date: "2018 - 2019",
    grade: "58.96%",
    desc: "I completed my 11th and 12th here in science stream with computer science as an elective.",
    degree: "Higher Secondary Certificate - HSC",
  },
  {
    id: 2,
    img: ryanLogo,
    school: "Ryan International School, Mumbai",
    date: "2017",
    grade: "70.8%",
    desc: "I completed my class 10 education from Ryan International School, under the ICSE board, where I studied Science with Computer.",
    degree: "ICSE(X) - Indian Certificate of Secondary Education",
  },
];

export const projects = [
  {
    id: 0,
    title: "PG App",
    description:
      "Platform for PG students to discover and filter accommodations based on their preferences. It features a user-friendly interface with advanced filtering options, allowing students to find the perfect place to stay used firebase for image uploads.",
    image: pgApi,
    tags: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB", "API", "Firebase"],
    github: "https://github.com/calebfelix/PG_App_Server",
    webapp: "https://pg-app-nuq4.onrender.com",
  },
  // {
  //   id: 1,
  //   title: "CS Prep",
  //   description:
  //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
  //   image: csprepLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/CSPrep",
  //   webapp: "https://csprep.netlify.app/",
  // },
];

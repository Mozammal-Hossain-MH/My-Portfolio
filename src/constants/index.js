import {
  backend,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  logo,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  web,
} from "../assets";
import Bootstrap from "../assets/Bootstrap.jpeg";
import firebase from "../assets/firebase.jpeg";
import github from "../assets/github.png";
import hrm from "../assets/hrm.png";
import MHSfashion from "../assets/MHSfashion.png";
import MHSfoodParadise from "../assets/MHSfoodParadise.png";
import pastry from "../assets/pastry.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "React Frontend Developer",
    company_name: "Webtec",
    icon: logo,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Participating in regular team meetings and working as well as learning regularly from experienced developers ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mozammal proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mozammal does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mozammal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HRM System",
    description: "A handy website that can manage human resource of a company.",
    credential: {
      email: "mozammalhossain33@gmail.com",
      password: "12345678@We",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: hrm,
    live_link: "https://67logics.quickreview.app",
    source_code_link: "",
  },
  {
    name: "Pastry Shop",
    description:
      "Web-based platform that allows users to buy pastry and cookies. This website gives users smooth animation and easy to use features.",
    credential: {
      email: "mozammalhossain33@gmail.com",
      password: "12345678@We",
    },
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pastry,
    live_link: "https://pastry-shop-client.vercel.app",
    source_code_link: "",
  },
  {
    name: "MHS Fashion",
    description:
      "Web-based platform that allows users to shopping from online store and this website gives users to satisfying smooth shopping experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: MHSfashion,
    live_link: "https://mhs-fashion.web.app",
    source_code_link:
      "https://github.com/Mozammal-Hossain-MH/MHS-fashion-client",
  },
  {
    name: "MHS Food Paradise",
    description:
      "Web-based platform that allows users to order foods from online store and this website gives users to satisfying smooth shopping experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: MHSfoodParadise,
    live_link: "https://mhs-food-paradise.web.app",
    source_code_link:
      "https://github.com/Mozammal-Hossain-MH/MHS-Food-Paradise-Client",
  },
];

export { experiences, projects, services, technologies, testimonials };

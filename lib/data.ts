import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaMobile } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import viapulsa_app from "@/public/viapulsa_app.jpeg";
import viapulsa_app_new from "@/public/viapulsa_app_new.png";
import viapulsa_panel_app from "@/public/viapulsa_panel_app.png";
import self_services_photoBooth from "@/public/self_services_photoBooth.png";
import viapulsa_panel_admin_next_generation from "@/public/viapulsa_panel_admin_next_generation.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mechanic",
    location: "Ponorogo, Indonesia",
    company: "SMK PGRI 2 Ponorogo",
    description:
      "Developed a comprehensive understanding of the automotive industry while studying at SMK PGRI 2 Ponorogo, specializing in Light Vehicle Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2013",
  },
  {
    title: "Bachelor’s Degree",
    location: "Jakarta, Indonesia",
    company: "Universitas Idraprasta PGRI",
    description:
      "Completed an in-depth study program at Idraprasta PGRI University, specializing in the Informatics program.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Manufacturing Technician",
    location: "Sidoarjo, Indonesia",
    company: "PT. Diansari Puri Plastindo",
    description:
      "Proficient in operating and maintaining injection molding machines, Set up and troubleshoot injection molding equipment, monitor production runs, and ensure quality output.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2014",
  },
  {
    title: "Administration Staff",
    location: "Bogor, Indonesia",
    company: "PT. Karuna Sumber Jaya",
    description:
      "Manage monetary transactions, ensuring accuracy and completeness, Oversee budgeting processes, collaborating with different departments.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2020",
  },
  {
    title: "Mobile Developer",
    location: "Madiun, Indonesia",
    company: "PT. Viapulsa Global Indonesia",
    description:
      "Proficient in Dart, crafting client-side applications with a focus on seamless user experiences, Expert in Flutter, building visually stunning cross- platform mobile applications for iOS and Android.",
    icon: React.createElement(FaMobile),
    date: "2020 - 2023",
  },
  {
    title: "Fullstack Developer",
    location: "Madiun, Indonesia",
    company: "PT. Viapulsa Global Indonesia",
    description:
      "Craft dynamic client-side applications using the versatility of JavaScript, Design modular and scalable user interfaces with a focus on React components for seamless single- page applications.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Viapulsa Panel Admin Next Generation",
    description:
      "The application is based on JavaScript, React.js, Node.js, Express.js, MongoDB. Bot system transactions using the Python.",
    tags: ["JavaScript", "Python", "Node", "React", "Express", "MongoDB",],
    imageUrl: viapulsa_panel_admin_next_generation,
  },
  {
    title: "Viapulsa App New",
    description:
      "Enhanced the Viapulsa application with a focus on elevating UI/UX and boosting performance in the latest version.",
    tags: ["JavaScript", "React Native", "Firebase"],
    imageUrl: viapulsa_app_new,
  },
  {
    title: "Viapulsa Panel App",
    description:
      "Utilized the Vue.js framework and Firebase to create Viapulsa, an efficient credit top-up application.",
    tags: ["JavaScript", "Node", "Vue", "Express", "Firebase",],
    imageUrl: viapulsa_panel_app,
  },
  {
    title: "Viapulsa App",
    description:
      "Developed Viapulsa, utilizing the Flutter framework and Firebase, to create an efficient and practical credit top-up application.",
    tags: ["Dart", "Flutter", "Firebase"],
    imageUrl: viapulsa_app,
  },
  {
    title: "Self Services PhotoBooth",
    description:
      "Developed and implemented enhancements for a self-service photobooth application, with a primary focus on optimizing user interactions.",
    tags: ["JavaScript", "React", "Electron", "Node", "Express", "SQLite"],
    imageUrl: self_services_photoBooth,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Dart",
  "Python(Programming Language)",
  "Java",
  "PHP",
  "Kotlin",
  "Firebase",
  "Flutter",
  "Vue.js",
  "Vuex",
  "Nuxt.js",
  "React.js",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "Electron.js",
  "Tailwind CSS",
  "JavaFX",
  "Laravel",
  "SQLite",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Machine Operation",
  "Car Service",
  "Machine Tools",
  "Car Repair",
  "Administration"
] as const;

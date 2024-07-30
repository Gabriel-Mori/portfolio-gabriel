import { ProjectsTexts } from "@/types/texts";
import { tags } from "../../tags";
import {
  img_planner,
  img_bitcent,
  img_temp,
  img_pediuchegou,
} from "@/assets/images/projects";

export const projects: ProjectsTexts = {
  title: "Projects",
  projects: [
    {
      title: "Financial control",
      description:
        "Financial control with Google login made with Next.js, Typescript and Firebase",
      tags: [tags["Next.js"], tags["Typescript"], tags["Firebase"]],
      image: img_bitcent,
      height: 1024,
      width: 1024,
      github: "https://github.com/Gabriel-Mori/BitCent-Transitions",
    },
    {
      title: "Temperature",
      description: "Temperature system with Javascript, HTML and CSS",
      tags: [tags["Javascript"], tags["HTML"], tags["CSS"]],
      image: img_temp,
      github: "https://github.com/Gabriel-Mori/tab-weather",
      width: 1438,
      height: 737,
    },
    {
      title: "Online menu",
      description:
        "Fullstack online menu system for burger restaurants, made with React.js and Node.js using the express.js library and Postgres and MongoDB database",
      tags: [
        tags["React.js"],
        tags["Javascript"],
        tags["Node"],
        tags["PostgreSQL"],
      ],
      image: img_pediuchegou,
      github: "https://github.com/Gabriel-Mori/codeburguer-frontend",
      width: 1376,
      height: 779,
    },
    {
      title: "Trip Planner",
      description: "Travel planner made in java and springBoot",
      tags: [tags["Java"]],
      image: img_planner,
      github: "https://github.com/Gabriel-Mori/Planner",
    },
  ],
};


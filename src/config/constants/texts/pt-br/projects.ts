import { ProjectsTexts } from "@/types/texts";
import { tags } from "../../tags";
import {
  img_planner,
  img_bitcent,
  img_temp,
  img_pediuchegou,
} from "@/assets/images/projects";

export const projects: ProjectsTexts = {
  title: "Projetos",
  projects: [
    {
      title: "Controle Financeiro",
      description:
        "Controle financeiro com login do google feito com Next.js, Typescript e Firebase",
      tags: [tags["Next.js"], tags["Typescript"], tags["Firebase"]],
      image: img_bitcent,
      height: 1024,
      width: 1024,
      github: "https://github.com/Gabriel-Mori/BitCent-Transitions",
    },
    {
      title: "Temperatura",
      description: "Sistema de temperatura com Javascript, HTML e CSS",
      tags: [tags["Javascript"], tags["HTML"], tags["CSS"]],
      image: img_temp,
      github: "https://github.com/Gabriel-Mori/tab-weather",
      width: 1438,
      height: 737,
    },
    {
      title: "Cardápio online",
      description:
        "Sistema Fullstack de Cardápio online para hamburgueria, feito com React.js e Node.js usando a biblioteca express.js e banco de dados Postgres e MongoDB ",
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
      title: "Planejador de viagem",
      description: "Planejador de viagem feito em java e springBoot",
      tags: [tags["Java"]],
      image: img_planner,
      github: "https://github.com/Gabriel-Mori/Planner",
    },
  ],
};


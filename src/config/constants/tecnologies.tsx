import { Tecnology } from "@/types/tecnologies";

import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
  FaAngular,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";

export const tecnologies: Tecnology[] = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Angular.js",
    icon: FaAngular,
  },
  {
    name: "Node.js",
    icon: FaNode,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
];


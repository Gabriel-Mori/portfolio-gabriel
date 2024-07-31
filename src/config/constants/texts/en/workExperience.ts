import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Work Experience",
  experiences: [
    {
      name: "Frontend Software Engineer",
      companyName: "Grupo irrah",
      description:
        "Acting as a full stack developer in product implementation and development projects.\n Focal point for supporting the team with questions, problem solving and product details.\n Development of the `Kigi` ERP (developed in AngularJS), working on tasks across all the system modules.\n Development of e-commerce/fashion `E-Vendi` fully integrated with the ERP (front in Next.js and API in Node.js), being a reference in the product for the team.\n Responsible for version launch in production/approval of the above products.\n Responsible for code review of the front-end team",
      from: "2022-05-01",
      to: "Current",
      icon: "Next.js",
      tags: [
        tags["React.js"],
        tags["Next.js"],
        tags["Typescript"],
        tags["Angular"],
      ],
    },
  ],
};


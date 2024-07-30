import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Desenvolvedor Frontend",
      companyName: "Grupo irrah",
      description:
        "Atuação como desenvolvedor full stack em projetos de implementação e desenvolvimento de produtos\n Ponto focal para apoio ao time em dúvidas, resolução de problemas e detalhes de produtos\n Desenvolvimento do ERP `Kigi`(desenvolvido em AngularJS), atuando nas tarefas em todos os módulos do sistema\n Desenvolvimento de e-commerce/moda `E-Vendi` totalmente integrado ao ERP (front em Next.js e API em Node.js), sendo referência no produto para o time\n Responsável pelo lançamento de versão em produção/homologação dos produtos acima\n Responsável pelo code review do time de front-end",
      from: "2022-05-01",
      to: "Atual",
      tags: [
        tags["React.js"],
        tags["Next.js"],
        tags["Typescript"],
        tags["Angular"],
      ],
      icon: "Next.js",
    },
  ],
};


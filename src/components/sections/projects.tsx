import "swiper/css";
import { SliderProjects } from "../slider-projects";
import { ProjectsTexts } from "@/types/texts";
import Link from "next/link";
import { ShinyButton } from "../shiny-button";
import { TbBrandGithubFilled } from "react-icons/tb";

interface Props {
  projectText: ProjectsTexts;
}

export const Projects = ({ projectText }: Props) => {
  return (
    <section
      id="projects"
      className="h-dvh text-white py-24 flex flex-col justify-center gap-24 [&>*]:z-10"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        {projectText.title}
      </h2>
      <div className="flex flex-wrap">
        <SliderProjects projects={projectText.projects} />
      </div>
      <div className="flex justify-center items-center -mt-16 ">
        <Link
          href="https://github.com/Gabriel-Mori"
          target="__blank"
          className="rounded-full ml-4 "
          rel="external"
        >
          <ShinyButton
            className="h-10 w-10 md:h-24 md:w-24 text-2xl rounded-full "
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Github"
            data-tooltip-place="bottom"
          >
            <TbBrandGithubFilled size={42} />
          </ShinyButton>
        </Link>
      </div>
    </section>
  );
};


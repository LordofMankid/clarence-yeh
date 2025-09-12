import { motion } from "framer-motion";
import type { Project } from "../../content.config";
import TechStackIcon from "../atoms/TechStackIcon";

interface CardProps {
  caption?: string;
  id: string;
  project: Project;
  background?: boolean;
  className?: string;
}

export default function Card(props: CardProps) {
  const { background, project, caption, id, className } = props;
  return (
    <div className={`block no-underline text-inherit  ${className}`}>
      <a
        className={`flex flex-col 
                    ${background ? "" : "transition-transform hover:translate-y-[-4px] duration-200 ease-in-out hover:cursor-pointer"}`}
        href={`/projects/${id}`}
      >
        <motion.div className="relative w-full h-full inline-block">
          <img
            src="/assets/non-svg-icons/proj_background.png"
            className={`block w-full h-full object-cover ${background ? "brightness-60" : ""}`}
          />
          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center">
            <img
              src={project.thumbnail}
              alt="Overlay"
              className={`max-h-60 max-w-45 my-0 ${background ? "brightness-60" : ""}`}
            />
            <p className="text-2xl font-bold">{caption}</p>
          </div>
          <div
            className={`absolute top-0 right-0 w-1/2 h-full flex flex-col px-8 items-center justify-start  ${background ? "pt-16 gap-4 text-black" : "pt-24 gap-10"}`}
          >
            <div
              className={`flex font-bold flex-col ${background ? "gap-2" : "gap-3"}`}
            >
              <p className="text-2xl text-center">{project.title}</p>
              <p
                className={`font-bold leading-5 ${background ? "text-base" : "text-lg"}`}
              >
                {project.description}
              </p>
            </div>
            <div className="flex flex-col w-full ">
              {project.dateRange ? (
                <p
                  className={`font-bold text-left leading-5  ${background ? "text-base" : "text-lg"}`}
                >
                  Timeline: {project.dateRange}
                </p>
              ) : null}
              {project.additionalInfo?.map((info, index) => {
                return (
                  <p
                    key={index}
                    className={`font-bold text-left leading-5  ${background ? "text-base" : "text-lg"}`}
                  >
                    {info}
                  </p>
                );
              })}
            </div>
            <div className="flex w-full flex-start flex-col">
              {project.links
                ? project.links.map((link) => {
                    return (
                      <a
                        key={link.url}
                        className={`font-bold text-left  leading-5 hover:text-amber-1 ${background ? "text-base" : "text-lg"}`}
                        href={link.url}
                        onClick={(e) => e.stopPropagation()} // prevent outer div click
                      >
                        {link.linkText}
                      </a>
                    );
                  })
                : null}
            </div>
            <div
              className={`absolute flex ${
                background
                  ? "bottom-16 right-12 gap-1"
                  : "bottom-24 right-12 gap-1"
              } `}
            >
              {project.techStack.map((icon) => (
                <TechStackIcon
                  name={icon}
                  size={background ? 20 : 24}
                  altStyle={background ? "brightness-60" : ""}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
}

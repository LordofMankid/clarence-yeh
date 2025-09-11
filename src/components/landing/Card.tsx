// import { Icon } from "astro-icon/components";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "../../content.config";

interface CardLink {
  url: string;
  linkText: string;
}
interface CardProps {
  caption?: string;
  id: string;
  project: Project;
  background?: boolean;
  className?: string;
}

export default function Card(props: CardProps) {
  const {
    // techStackIcons,
    background,
    project,
    caption,
    id,
    className,
  } = props;
  return (
    <div className={`block no-underline text-inherit  ${className}`}>
      <a
        className={`flex flex-col 
                    ${background ? "" : "transition-transform hover:translate-y-[-4px] duration-200 ease-in-out hover:cursor-pointer"}`}
        href={`/projects/${id}`}
      >
        {/* <div className="relative aspect-[16/9] rounded-[40px] bg-white shadow-[0px_10px_15px_var(--blue-7)] overflow-hidden"> */}
        {/* {imageSrc ? (
  url?: string;
  techStack: string[];
  imageSrc?: string;
  altImagePosition?: string;
}

export default function Card(props: CardProps) {
  const { title, subtitle, date, url, techStack, imageSrc, altImagePosition } =
    props;
  return (
    <a href={url} className="block no-underline text-inherit">
      <div className="flex flex-col transition-transform duration-300 ease-in-out hover:scale-110">
        <div className="relative aspect-[16/9] rounded-[40px] bg-white shadow-[0px_10px_15px_var(--blue-7)] overflow-hidden">
          {/* {imageSrc ? (
            <CldImage
              src={imageSrc}
              class={`absolute inset-0 w-full h-full object-cover p-0 m-0 ${altImagePosition}`}
            />
          ) : (
            <CldImage
              src="no-image_wgtpif"
              crop={{
                type: "fill",
                source: true,
              }}
              class ="absolute inset-0 w-full h-full object-fill p-0 m-0"
            />
          )} */}

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
            className={`absolute top-0 right-0 w-1/2 h-full flex flex-col px-8 pt-24 items-center justify-start gap-10 ${background ? "text-black" : ""}`}
          >
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-center">{project.title}</p>
              <p className="font-bold leading-5">{project.description}</p>
            </div>
            <div className="flex flex-col w-full ">
              {project.additionalInfo?.map((info, index) => {
                return (
                  <p key={index} className="font-bold text-left leading-5">
                    {info}
                  </p>
                );
              })}
              {project.dateRange ? (
                <p className="font-bold text-left leading-5">
                  Timeline: {project.dateRange}
                </p>
              ) : null}
            </div>
            <div className="flex w-full flex-start flex-col">
              {project.links
                ? project.links.map((link) => {
                    return (
                      <a
                        key={link.url}
                        className="font-bold text-left leading-5 hover:text-amber-1"
                        href={link.url}
                        onClick={(e) => e.stopPropagation()} // prevent outer div click
                      >
                        {link.linkText}
                      </a>
                    );
                  })
                : null}
            </div>
          </div>
        </motion.div>

        <div className="absolute top-6 right-8 flex gap-0.5 z-10">
          {/* {techStackIcons} */}
        </div>
      </a>
    </div>
  );
}

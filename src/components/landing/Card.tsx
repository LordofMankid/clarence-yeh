import { motion, useScroll, useTransform } from "framer-motion";

interface CardLink {
  url: string;
  linkText: string;
}
interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  caption?: string;
  projUrl?: string;
  techStack: string[];
  imageSrc?: string;
  altImagePosition?: string;
  links?: CardLink[];
}

export default function Card(props: CardProps) {
  const {
    title,
    subtitle,
    date,
    projUrl,
    caption,
    techStack,
    imageSrc,
    links,
    altImagePosition,
  } = props;
  return (
    <div className="block no-underline text-inherit">
      <div
        className="flex flex-col transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
        onClick={() => {
          console.log("clicked on card");
          projUrl
            ? (window.location.href = projUrl)
            : (window.location.href = "/");
        }}
      >
        {/* <div className="relative aspect-[16/9] rounded-[40px] bg-white shadow-[0px_10px_15px_var(--blue-7)] overflow-hidden"> */}
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

        <motion.div className="relative inline-block">
          <img
            src="assets/non-svg-icons/proj_background.png"
            className="block inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center">
            <img
              src={imageSrc}
              alt="Overlay"
              className="max-w-24 max-h-full my-0"
            />
            <p className="text-2xl font-bold">{caption}</p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col px-8 pt-24 items-center justify-start gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-center">{title}</p>
              <p className="font-bold leading-5">{subtitle}</p>
            </div>
            <div className="flex w-full">
              {date ? (
                <p className="font-bold text-left leading-5">
                  Timeline: {date}
                </p>
              ) : null}
            </div>
            <div className="flex w-full flex-start flex-col">
              {links
                ? links.map((link) => {
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

        {/* <div className="absolute top-6 right-8 flex gap-0.5 z-10">
          {techStack ? techStack.map((skill) => <Icon name={skill} />) : null}
        </div> */}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import type { Project } from "../../content.config";
import Card from "./Card";
import CarouselButton from "./CarouselButton";

interface LandingCarouselProps {
  projects: { data: Project; id: string }[];
}
const Carousel = (props: LandingCarouselProps) => {
  const { projects } = props;

  const [index, setIndex] = useState(0);

  const visible = [
    projects[index % projects.length],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-row justify-center w-full">
        <div className="flex-row min-h-72 h-[25vh] bg-red gap-[15vw] hidden lg:flex">
          <Card
            id={visible[0].id}
            project={visible[0].data}
            background
            className="lg:w-md xl:w-lg aspect-[9/5] "
          />
          <Card
            id={visible[2].id}
            project={visible[2].data}
            background
            className="lg:w-md xl:w-lg aspect-[9/5] "
          />
        </div>
        <div className=" absolute flex flex-col items-center justify-center z-20 w-full translate-y-40">
          <div className="flex flex-row items-center justify-center gap-8 z-20 w-full">
            <CarouselButton onClick={prev} direction={"reverse"} />
            <Card
              id={visible[1].id}
              project={visible[1].data}
              className="sm:w-xl lg:w-2xl aspect-[9/5] "
            />
            <CarouselButton onClick={next} />
          </div>
          <div className="flex flex-row gap-4 items-center">
            {projects.map((project) => {
              return (
                <div>
                  <img
                    key={project.id}
                    src="/assets/non-svg-icons/ticker.png"
                    className={`${visible[2].id === project.id ? "w-5" : "w-4"}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* {visible.map((project, idx) => {
          return <Card key={idx} id={project.id} project={project.data} />;
        })} */}
      </div>
    </div>
  );
};

export default Carousel;

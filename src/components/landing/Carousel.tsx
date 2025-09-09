import React, { useState } from "react";
import type { Project } from "../../content.config";
import Card from "./Card";

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
    <div>
      <div className="flex flex-row justify-center relative h-[40vh]">
        <div className="flex flex-row min-h-72 h-[25vh] bg-red gap-[15vw]">
          <Card id={visible[0].id} project={visible[0].data} background />
          <Card id={visible[2].id} project={visible[2].data} background />
        </div>
        <div className="flex flex-row h-96 top-32 absolute z-20">
          <button onClick={prev}>prev</button>
          <Card id={visible[1].id} project={visible[1].data} />

          <button onClick={next}>next</button>
        </div>
        {/* {visible.map((project, idx) => {
          return <Card key={idx} id={project.id} project={project.data} />;
        })} */}
      </div>
    </div>
  );
};

export default Carousel;

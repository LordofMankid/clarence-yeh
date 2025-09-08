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
      <div className="grid grid-cols-3">
        {visible.map((project, idx) => {
          return <Card key={idx} id={project.id} project={project.data} />;
        })}
      </div>

      <button onClick={prev}>prev</button>

      <button onClick={next}>next</button>
    </div>
  );
};

export default Carousel;

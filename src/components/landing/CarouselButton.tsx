import React from "react";

interface CarouselButtonProps {
  onClick?: () => void;
  text?: string;
  direction?: "reverse";
}
export default function CarouselButton(props: CarouselButtonProps) {
  const { onClick, direction, text } = props;

  return (
    <div onClick={onClick} className="hover:scale-105">
      <img
        src={"/assets/non-svg-icons/arrow.png"}
        alt="Overlay"
        className={` ${
          direction === "reverse" ? "scale-x-[-1]" : ""
        } hover:cursor-pointer`}
      />
    </div>
  );
}

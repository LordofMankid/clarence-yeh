interface CarouselButtonProps {
  onClick?: () => void;
  direction?: "reverse";
}
export default function CarouselButton(props: CarouselButtonProps) {
  const { onClick, direction } = props;

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

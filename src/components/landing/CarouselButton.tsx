interface CarouselButtonProps {
  onClick?: () => void;
  direction?: "reverse";
  altStyle?: string;
}
export default function CarouselButton(props: CarouselButtonProps) {
  const { onClick, direction, altStyle } = props;

  return (
    <div onClick={onClick} className={`hover:scale-105 ${altStyle}`}>
      <img
        src={"/assets/non-svg-icons/arrow.png"}
        alt="Overlay"
        className={`m-0 ${
          direction === "reverse" ? "scale-x-[-1]" : ""
        } hover:cursor-pointer`}
      />
    </div>
  );
}

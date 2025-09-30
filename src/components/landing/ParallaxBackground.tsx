// components/ParallaxBackground.tsx
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (value) => -value * 0.4);
  return (
    <div className="absolute top-0 left-0 w-screen  z-[-1] overflow-visible pointer-events-none">
      <motion.img
        src="/assets/backgrounds/backgrounds.svg"
        style={{
          y,
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
        className="absolute top-0 left-0 object-cover w-full min-h-[150vh] m-0 p-0 overflow-visible"
        alt=""
      />
    </div>
  );
}

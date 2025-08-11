// components/ParallaxBackground.tsx
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-1530px", "-1450px"]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <motion.img
        src="/assets/backgrounds/backgrounds.svg"
        style={{ y }}
        className="absolute top-0 w-full object-cover"
        alt=""
      />
    </div>
  );
}

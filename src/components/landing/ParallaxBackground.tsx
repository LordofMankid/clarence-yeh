// components/ParallaxBackground.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const scrollRef = useRef(null);

  const y = useTransform(scrollY, [0, 1000], ["-800px", "-500px"]);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      // Zoom in more if window gets narrow
      const baseWidth = 1920; // your "ideal" image width
      const zoomFactor = Math.max(1, baseWidth / window.innerWidth);
      setScale(zoomFactor);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="fixed top-0 left-0 w-screen min-h-[100vh] z-[-1] overflow-hidden pointer-events-none"
    >
      <motion.img
        src="/assets/backgrounds/backgrounds.svg"
        style={{ y, scale }}
        className="absolute top-0 object-cover w-full min-h-full"
        alt=""
      />
    </div>
  );
}

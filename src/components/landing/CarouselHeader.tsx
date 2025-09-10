import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
export default function CarouselHeader() {
  const { scrollY } = useScroll();

  const [vh, setVh] = useState(1);
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);
  const opacity = useTransform(scrollY, [vh * 0.25, vh * 0.6], [0, 1]);
  return (
    <motion.div style={{ opacity }} className="pt-30">
      <h1 className="text-white text-6xl font-bold mx-auto text-center">
        projects
      </h1>
    </motion.div>
  );
}

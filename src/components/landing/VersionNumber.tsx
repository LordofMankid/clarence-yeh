import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
export default function VersionNumber() {
  const { scrollY } = useScroll();

  const [vh, setVh] = useState(1);
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);
  // Opacity goes from 1 at scroll 0, to 0 at scroll 0.2

  const opacity = useTransform(scrollY, [0, vh * 0.5], [1, 0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1, ease: "easeOut" }}
    >
      <motion.div
        style={{ opacity }}
        className="absolute flex flex-col mt-14 xl:right-48"
      >
        <p className="text-white">v0.1.1</p>
      </motion.div>
    </motion.div>
  );
}

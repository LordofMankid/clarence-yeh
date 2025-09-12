import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import LinkIcons from "../atoms/LinkIcons";
export default function JunStudioPopup() {
  const { scrollY } = useScroll();

  const [vh, setVh] = useState(1);
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);
  // Opacity goes from 1 at scroll 0, to 0 at scroll 0.2

  const opacity = useTransform(scrollY, [0, vh * 0.5], [1, 0]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        style={{ opacity }}
        className="absolute flex flex-col xl:left-48"
      >
        <LinkIcons />
        <p className="text-white mt-2">made by jun studio</p>
      </motion.div>
    </motion.div>
  );
}

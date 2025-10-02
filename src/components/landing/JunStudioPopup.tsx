import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import LinkIcons from "../atoms/LinkIcons";
import Changelog from "../../content/changelog/changelog.md?raw";

const version = Changelog.match(/^#\s*(.+)$/m)?.[1] ?? "v2.1.X";

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
      className="absolute flex flex-col bottom-24 sm:bottom-auto left-10 sm:left-24 xl:left-48"
    >
      <motion.div style={{ opacity }} className="flex flex-col">
        <LinkIcons altStyle="hidden sm:block" />
        <p className="text-white text-sm sm:mt-2 sm:text-lg">
          made by jun studio
        </p>
        <a
          className="sm:hidden text-white text-xs no-underline hover:text-amber-1"
          href="/changelog"
        >
          {version}
        </a>
      </motion.div>
    </motion.div>
  );
}

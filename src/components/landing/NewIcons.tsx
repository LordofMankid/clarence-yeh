import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
export default function NewIcons() {
  const { scrollY } = useScroll();

  const [vh, setVh] = useState(1);
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);
  // Opacity goes from 1 at scroll 0, to 0 at scroll 0.2

  const opacity = useTransform(scrollY, [0, vh * 0.5], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute flex flex-col xl:left-48"
    >
      <div className="flex">
        <a href="https://github.com/lordofmankid" target="_blank">
          <img
            src="/assets/non-svg-icons/github_colored.png"
            className="h-12"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/clarence-yeh-431613222"
          target="_blank"
        >
          <img
            src="/assets/non-svg-icons/linkedin_colored.png"
            className="h-12"
          />
        </a>
        <a href="https://www.youtube.com/@itsclarence7685" target="_blank">
          <img
            src="/assets/non-svg-icons/youtube_colored.png"
            className="h-12"
          />
        </a>
      </div>
      <p className="text-white">made by jun studio</p>
    </motion.div>
  );
}

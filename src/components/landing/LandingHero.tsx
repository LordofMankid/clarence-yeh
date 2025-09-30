import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import LinkIcons from "../atoms/LinkIcons";

export default function LandingHero() {
  const { scrollY } = useScroll();

  const [vh, setVh] = useState(1);
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);
  // Opacity goes from 1 at scroll 0, to 0 at scroll 0.2

  const opacity = useTransform(scrollY, [0, vh * 0.3], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        style={{ opacity }}
        className="flex flex-col h-[calc(100vh-192px)] w-screen justify-center pt-28"
      >
        <h1 className="text-white sm:text-8xl font-bold mx-auto">
          Clarence Yeh
        </h1>
        <h2 className="text-white text-sm font-normal sm:text-2xl sm:font-semibold sm:mt-4 mx-auto text-center">
          currently co-founder & cto of{" "}
          <a
            href="https://freebites.org"
            target="_blank"
            className="underline text-inherit font-normal sm:font-semibold hover:text-amber-1"
          >
            Freebites
          </a>
          <br />
          <span className="hidden sm:inline">
            previously software engineer at{" "}
            <a
              href="https://markitai.com/"
              target="_blank"
              className="underline text-inherit font-normal sm:font-semibold hover:text-amber-1"
            >
              Markit AI
            </a>
          </span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex mx-auto gap-4 items-center"
        >
          <LinkIcons altStyle="h-6 sm:h-12 inline-block sm:hidden" />
          <a
            href="/other/Clarence Yeh - Resume.pdf"
            download
            className="underline text-white text-sm"
          >
            resume
          </a>
        </motion.div>
        <motion.a
          href="/other/Clarence Yeh - Resume.pdf"
          className="underline text-white text-center hidden sm:inline sm:text-lg hover:text-amber-1"
          download
          initial={{ opacity: 0, y: 10 }} // start hidden + shifted down
          animate={{ opacity: 1, y: 0 }} // fade in + slide up
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} // 1s delay
        >
          check out my resume
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

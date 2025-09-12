import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

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
        <h1 className="text-white text-8xl font-bold mx-auto">Clarence Yeh</h1>
        <h2 className="text-white text-2xl font-semibold mt-4 mx-auto text-center">
          currently co-founder & cto of{" "}
          <a
            href="https://freebites.org"
            target="_blank"
            className="underline text-inherit font-semibold hover:text-amber-1"
          >
            Freebites
          </a>
          <br />
          previously software engineer at{" "}
          <a
            href="https://markitai.com/"
            target="_blank"
            className="underline text-inherit font-semibold hover:text-amber-1"
          >
            Markit AI
          </a>
        </h2>
        <motion.a
          href="/other/Clarence Yeh - Resume.pdf"
          className="underline text-white text-center text-lg hover:text-amber-1"
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

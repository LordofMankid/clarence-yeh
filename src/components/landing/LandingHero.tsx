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
      style={{ opacity }}
      className="flex flex-col h-[calc(100vh-256px)] w-screen justify-center pt-28"
    >
      <h1 className="text-white text-8xl font-bold mx-auto">Clarence Yeh</h1>
      <h2 className="text-white text-2xl font-semibold mt-4 mx-auto text-center">
        currently co-founder & cto of{" "}
        <a
          href="https://freebites.org"
          target="_blank"
          className="underline text-inherit font-semibold"
        >
          Freebites
        </a>
        <br />
        previously software engineer at{" "}
        <a
          href="https://markitai.com/"
          target="_blank"
          className="underline text-inherit font-semibold"
        >
          Markit AI
        </a>
      </h2>
    </motion.div>
  );
}

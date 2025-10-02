import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Header(props: { currentPath: string }) {
  const { currentPath } = props;

  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "blogs", label: "BLOG" },
  ];

  const listVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };
  return (
    <>
      <nav className="fixed hidden sm:flex mt-12 w-full z-50 ">
        <a href="/">
          <img
            className="absolute h-20 w-20 ml-28 rounded-5xl hidden md:flex"
            src="/assets/pixelProfPic.png"
          />
        </a>
        <ul
          className="absolute left-1/2 -translate-x-1/2 
                     flex justify-center items-center px-12 h-16 gap-16"
        >
          {navItems.map(({ id, label }) => (
            <div className="flex justify-center" key={id}>
              <div
                className={`${currentPath === `#${id}` ? "text-amber-1" : ""}`}
              />
              <li>
                <a
                  href={`${id === "projects" ? `/#${id}` : `/${id}`}`}
                  className="text-white hover:text-amber-1 text-2xl no-underline"
                >
                  {label}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </nav>

      <nav className="absolute block h-10 w-full justify-center sm:hidden">
        <button onClick={() => setOpen(!open)} className="pl-8 pt-15">
          {open ? (
            <AiOutlineClose size={24} color="white" />
          ) : (
            <GiHamburgerMenu size={24} color="white" />
          )}
        </button>
        {open && (
          <motion.ul
            className="flex flex-col items-start h-16 pl-8"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems
              .filter(({ id }) => id != "projects") // filter out projects
              .map(({ id, label }) => (
                <div className="flex justify-center" key={id}>
                  <motion.li key={id} variants={itemVariants}>
                    <a
                      href={`${id === "projects" ? `/#${id}` : `/${id}`}`}
                      className="text-white hover:text-amber-1 text-base no-underline"
                    >
                      {label}
                    </a>
                  </motion.li>
                </div>
              ))}
          </motion.ul>
        )}
      </nav>
    </>
  );
}

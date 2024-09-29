// Dependencies
import { FC } from "react";
import { motion } from "framer-motion";

// Icons
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";

const MenuFooter: FC = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-white transition-colors hover:text-violet-300" />
            </motion.a>
          );
        })}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.125,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: 8 }}
        className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-violet-700 px-3 py-3 text-4xl uppercase text-violet-200 transition-colors hover:bg-white hover:text-violet-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
      >
        <span className="hidden md:block">contact us</span> <FiArrowRight />
      </motion.button>
    </>
  );
};

export default MenuFooter;

const SOCIAL_CTAS = [
  {
    Component: SiTwitter,
    href: "#",
  },
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
];

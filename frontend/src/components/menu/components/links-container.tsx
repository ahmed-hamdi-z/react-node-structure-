// Dependencies
import { FC } from "react";
import { motion } from "framer-motion";

const LinksContainer: FC = () => {
  return (
    <motion.div className="w-40 space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

export default LinksContainer;

// menu nav links
const NavLink = ({
  children,
  href,
  idx,
}: {
  children: React.ReactNode;
  href: string;
  idx: number;
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className="block text-5xl font-semibold text-violet-400 transition-colors hover:text-violet-50 md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

const LINKS = [
  {
    title: "home",
    href: "#",
  },
  {
    title: "features",
    href: "#",
  },
  {
    title: "blog",
    href: "#",
  },
  {
    title: "careers",
    href: "#",
  },
];

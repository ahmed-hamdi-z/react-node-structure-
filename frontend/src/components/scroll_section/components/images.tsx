import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface Item {
  id: number;
  title: string;
  img: string;
}

interface ImagesProps {
  content: Item[];
  scrollYProgress: MotionValue<number>;
}

const Images: React.FC<ImagesProps> = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Images;

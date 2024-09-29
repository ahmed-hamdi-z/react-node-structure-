// Dependencies
import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Texts: FC = () => {
  // framer-motion variants
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  // Intersection Observer hook
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,  
    threshold: 0.1,   
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"  
      animate={controls}
      variants={MULTIDIRECTION_SLIDE_VARIANTS}
      transition={{ duration: 1 }}
      className="max-w-lg text-center md:text-start"
    >
      <h2 className="mb-3 text-3xl dark:text-white text-red-800">Your Digital Odyssey Starts Here</h2>
      <p className="mb-6 text-sm leading-relaxed text-neutral-400">
        Imagine your brand as a masterpiece waiting to be unveiled.
        Click Agency acts as your artistic partner, transforming raw
        potential into captivating digital experiences.
      </p>

    </motion.div>
  );
};

export default Texts;

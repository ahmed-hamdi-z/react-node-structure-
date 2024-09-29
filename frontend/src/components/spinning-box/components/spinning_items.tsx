import { motion } from "framer-motion";
import Box from "./box";

// Components

// SpinningItems component definition
const SpinningItems: React.FC = () => {
  const PERSPECTIVE = "1500px"; // Define the perspective for 3D effect

  return (
    <div className="flex md:flex-row flex-col items-center justify-center text-5xl font-semibold text-white gap-6 md:gap-4">
      <motion.span
        style={{
          perspective: PERSPECTIVE,
        }}
        animate={{
          y: [0, -15, 0], // Animation keyframes for vertical movement
        }}
        transition={{
          duration: 4, // Duration of the animation
          repeat: Infinity, // Repeat the animation infinitely
          ease: "easeInOut", // Easing function for smooth animation
        }}
        className=" "
      >
        As simple as
      </motion.span>
      <Box front="Learn" bottom="Earn" back="Grow" top="Repeat" />
    </div>
  );
};

export default SpinningItems;

// Logo Variants
export const svgVariants = {
  hidden: { opacity: 0.1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 4, // You can adjust the duration as needed
      repeat: Infinity, // Loop indefinitely
    },
  },
};
export const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    y: -400, // Start the path outside the view (top of the screen)
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    y: 0, // Move it back to its original position
    transition: {
      pathLength: {
        duration: 2, // Duration of the path drawing
        ease: "easeInOut",
      },
      y: {
        duration: 1, // Speed of the path drop-in
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.5, // Adjust opacity transition timing
      },
    },
  },
};
export const pathVariantsI = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    x: -500, // Start the path outside the view (top of the screen)
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    x: 0, // Move it back to its original position
    transition: {
      pathLength: {
        duration: 2, // Duration of the path drawing
        ease: "easeInOut",
      },
      x: {
        duration: 1, // Speed of the path drop-in
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.5, // Adjust opacity transition timing
      },
    },
  },
};
export const pathVariantsCk = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    y: 200,
    x: 100, // Start the path outside the view (top of the screen)
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    y: 0,
    x: 0, // Move it back to its original position
    transition: {
      pathLength: {
        duration: 2, // Duration of the path drawing
        ease: "easeOut",
      },
      x: {
        duration: 1, // Speed of the path drop-
        ease: "easeOut",
      },
      opacity: {
        duration: 0.5, // Adjust opacity transition timing
      },
    },
  },
};

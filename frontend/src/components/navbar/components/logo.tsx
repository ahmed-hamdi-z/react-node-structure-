// Dependencies
import { FC } from "react";
import { motion } from "framer-motion";

// Variants
import {pathVariants, pathVariantsCk, pathVariantsI, svgVariants} from '@/utils/charts/variables'

const Logo: FC = () => {
  const PERSPECTIVE = "1500px";
  return (
    <motion.a
    style={{
      perspective: PERSPECTIVE,
    }}
  
    animate={{
      y: [0, -15, 0],  
    }}
    transition={{
      duration: 4,  
      repeat: Infinity,  
      ease: 'easeInOut', 
    }}
      href="#"
      className="grid h-16 w-28 place-content-center bg-transparent "
    >
      <motion.svg
        width="100"
        height="60"
        className=""
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <style type="text/css"></style>
        <motion.path
          className="st0"
          d="M334.66,329.84c-22.73,7.74-42.67,19.7-59.84,35.9c-17.17,16.2-30.82,36.51-40.98,60.93
            c-10.16,24.42-15.23,53.31-15.23,86.68c0,33.37,5.07,62.26,15.23,86.68c10.16,24.42,23.81,44.85,40.98,61.29
            c17.17,16.44,37.11,28.53,59.84,36.27c22.73,7.74,46.91,11.61,72.54,11.61c28.04,0,54.03-3.87,77.97-11.61
            c23.93-7.74,49.44-20.07,76.52-36.99l47.87,110.25c-30.46,18.86-62.98,32.88-97.56,42.07c-34.58,9.19-70.96,13.78-109.16,13.78
            c-47.87,0-91.15-7.86-129.83-23.57c-38.69-15.72-71.69-37.72-99.01-66c-27.32-28.29-48.36-61.53-63.11-99.74
            c-14.75-38.2-22.12-79.54-22.12-124.03c0-44.49,7.38-85.83,22.12-124.03c14.75-38.2,35.78-71.44,63.11-99.73
            c27.32-28.29,60.32-50.29,99.01-66.01C311.69,207.86,354.96,200,402.84,200c38.2,0,74.59,4.71,109.16,14.14
            c34.57,9.43,67.09,23.57,97.56,42.43L561.69,366.1c-26.6-16.44-51.98-28.53-76.16-36.27c-24.18-7.74-50.29-11.61-78.33-11.61
            C381.56,318.23,357.38,322.1,334.66,329.84"
          fill="none"
          stroke="#fff" // Set stroke color
          strokeWidth="60"
          variants={pathVariants}

        />
        <motion.rect
          x="668.57"
          y="219.59"
          width="120.4"
          height="607.11"
          fill="none"
          stroke="#fff"
          strokeWidth="60"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#fff" // Set stroke color
          strokeWidth="60"
          variants={pathVariantsI}
          className="st0"
          d="M878.98,338.18c-14.02-10.88-21.04-26.72-21.04-47.51c0-18.86,6.65-34.09,19.95-45.69
	c13.3-11.61,29.62-17.41,48.96-17.41c19.34,0,35.54,5.8,48.6,17.41c13.06,11.61,19.58,26.84,19.58,45.69
	c0,19.34-6.41,34.82-19.22,46.42C963,348.7,946.68,354.5,926.85,354.5C908.96,354.5,893,349.06,878.98,338.18 M987.06,826.69h-120.4
	V399.47h120.4V826.69z M878.98,338.18c-14.02-10.88-21.04-26.72-21.04-47.51c0-18.86,6.65-34.09,19.95-45.69
	c13.3-11.61,29.62-17.41,48.96-17.41c19.34,0,35.54,5.8,48.6,17.41c13.06,11.61,19.58,26.84,19.58,45.69
	c0,19.34-6.41,34.82-19.22,46.42C963,348.7,946.68,354.5,926.85,354.5C908.96,354.5,893,349.06,878.98,338.18"
        />
        <motion.path
          fill="none"
          stroke="#fff" // Set stroke color
          strokeWidth="5"
          variants={pathVariants}
          className="st1"
          d="M872.08,337.02c16.06,12.46,34.34,18.69,54.83,18.69c22.71,0,41.4-6.65,56.08-19.94
	c14.67-13.29,22.01-31.02,22.01-53.17c0-21.6-7.48-39.05-22.43-52.34c-14.95-13.29-33.51-19.94-55.66-19.94
	c-22.16,0-40.85,6.65-56.08,19.94c-15.23,13.29-22.84,30.74-22.84,52.34C847.98,306.42,856.01,324.56,872.08,337.02"
        />
        <motion.path
          fill="none"
          stroke="#fff" // Set stroke color
          strokeWidth="60"
          variants={pathVariants}
          className="st0"
          d="M1081.06,512.26c11.36-27.32,27.32-51.14,47.87-71.45c20.55-20.31,44.73-36.14,72.53-47.51
	c27.81-11.36,58.15-17.04,91.03-17.04c29.01,0,55.25,3.02,78.7,9.07c23.45,6.04,48.47,15.84,75.07,29.38l-48.6,108.8
	c-18.86-10.64-35.91-18.13-51.14-22.49c-15.23-4.35-31.8-6.53-49.69-6.53c-16.44,0-31.31,2.54-44.61,7.62
	c-13.3,5.08-24.54,12.33-33.73,21.76s-16.32,20.67-21.4,33.73c-5.08,13.06-7.62,27.81-7.62,44.24c0,16.44,2.54,31.19,7.62,44.25
	c5.08,13.05,12.21,24.18,21.4,33.37c9.19,9.19,20.43,16.32,33.73,21.4c13.3,5.08,28.17,7.62,44.61,7.62
	c17.89,0,34.45-2.05,49.69-6.16c15.23-4.11,32.28-11.97,51.14-23.57l48.6,110.25c-26.6,13.54-51.62,23.21-75.07,29.01
	c-23.45,5.8-49.69,8.71-78.7,8.71c-32.88,0-63.22-5.68-91.03-17.05c-27.8-11.36-51.98-27.08-72.53-47.15
	c-20.55-20.07-36.51-43.76-47.87-71.08c-11.36-27.32-17.04-57.18-17.04-89.58C1064.01,569.44,1069.69,539.58,1081.06,512.26"
        />
        <motion.path
          fill="none"
          stroke="#fff" // Set stroke color
          strokeWidth="60"
          variants={pathVariantsCk}
          className="st1"
          d="M1725.17,219.64c21.5,0.01,43.01-0.14,64.51,0.17c3.42,0.05,6.8,2.22,10.2,3.41c-1.57,3.27-2.4,7.27-4.81,9.7
	c-67.22,67.53-133.73,135.81-202.27,201.98c-46.25,44.65-46.25,131.72-0.06,176.31c67.69,65.34,133.33,132.79,199.85,199.35
	c1.69,1.69,3.78,3.14,4.94,5.14c1.25,2.12,2.75,5.19,2.05,7.06c-0.67,1.77-3.92,3.02-6.26,3.59c-2.54,0.62-5.34,0.21-8.03,0.21
	c-40.92,0.01-81.84-0.1-122.76,0.11c-6.71,0.03-11.8-1.71-16.66-6.62c-40.37-40.73-80.9-81.32-121.58-121.73
	c-12.8-12.71-19.06-27.47-19.01-45.64c0.25-86.35,0.25-172.71,0-259.06c-0.05-18.16,6.14-32.96,18.94-45.67
	c40.69-40.42,81.21-81,121.58-121.73c4.85-4.89,9.9-6.79,16.65-6.69C1683.35,219.82,1704.26,219.63,1725.17,219.64"
        />
        <motion.path
          fill="none"
          stroke="#fff" // Set stroke color
          strokeWidth="60"
          variants={pathVariantsCk}
          className="st1"
          d="M1699.31,522.75c0-44.53,0.03-89.05-0.03-133.58c-0.01-5.59-0.12-12.2,6.73-12.48
	c3.81-0.16,9.31,3.61,11.5,7.17c26.93,43.73,53.34,87.78,80.02,131.66c3.16,5.2,3.3,9.71,0.11,14.96
	c-26.83,44.14-53.54,88.36-80.22,132.59c-2.82,4.67-6.42,9.41-11.86,6.32c-3.19-1.81-5.95-7.37-5.98-11.27
	C1699.15,613,1699.3,567.88,1699.31,522.75"
        />
      </motion.svg>
    </motion.a>
  );
};

export default Logo;

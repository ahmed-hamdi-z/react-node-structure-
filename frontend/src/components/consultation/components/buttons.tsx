// Importing motion and MotionConfig components from framer-motion for animations
import {
    motion,
    MotionConfig,
} from "framer-motion";

// Importing necessary types and hooks from React
import React, {
    Dispatch, // Type for dispatch function in useState or useReducer
    SetStateAction, // Type for state update function
    MouseEventHandler, // Type for mouse event handler function
} from "react";

// Importing icons from react-icons library
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Importing twMerge function from tailwind-merge to merge Tailwind CSS classes
import { twMerge } from "tailwind-merge";

import { CONTENT } from "./content";

// Define the props for the Buttons component
interface ButtonsProps {
    idx: number;
    setIdx: Dispatch<SetStateAction<number>>;
}

const Buttons: React.FC<ButtonsProps> = ({ idx, setIdx }) => {
    return (
        <div className="relative grid h-[57px] grid-cols-2 border-t border-neutral-700">
            {/* Left Shift Button */}
            <ShiftButton
                onClick={() => {
                    setIdx((pv) => {
                        if (pv === 0) {
                            return CONTENT.length - 1;
                        } else {
                            return pv - 1;
                        }
                    });
                }}
                topDivClasses="bg-neutral-900"
                bottomDivClasses="bg-neutral-950"
            >
                <FiArrowLeft className="mx-auto text-xl" />
            </ShiftButton>

            {/* Right Shift Button */}
            <ShiftButton
                topDivClasses="bg-neutral-900"
                btnClasses="border-neutral-700 border-l"
                bottomDivClasses="bg-neutral-950"
                onClick={() => {
                    setIdx((pv) => {
                        if (pv === CONTENT.length - 1) {
                            return 0;
                        } else {
                            return pv + 1;
                        }
                    });
                }}
            >
                <FiArrowRight className="mx-auto text-xl" />
            </ShiftButton>

            {/* Animated Span */}
            <motion.span
                key={idx}
                initial={{
                    width: '0%',
                }}
                animate={{
                    width: '100%',
                }}
                transition={{
                    duration: 12,
                    ease: 'linear',
                }}
                onAnimationComplete={() => {
                    setIdx((pv) => {
                        if (pv === CONTENT.length - 1) {
                            return 0;
                        } else {
                            return pv + 1;
                        }
                    });
                }}
                className="pointer-events-none absolute -top-[1px] bottom-0 z-20 bg-neutral-600/10"
            />
        </div>
    );
};

// Define the props type for the ShiftButton component
interface ShiftButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    btnClasses?: string;
    topDivClasses?: string;
    bottomDivClasses?: string;
}

// ShiftButton component definition
const ShiftButton: React.FC<ShiftButtonProps> = ({
    onClick,
    children,
    btnClasses,
    topDivClasses,
    bottomDivClasses,
}) => {
    return (
        <MotionConfig
            transition={{
                ease: "circOut",
                duration: 0.25,
            }}
        >
            <motion.button
                initial="initial"
                whileHover="hovered"
                className={twMerge(
                    "relative overflow-hidden transition-colors",
                    btnClasses
                )}
                onClick={onClick}
            >
                {/* Top div that shifts up on hover */}
                <motion.div
                    variants={{
                        initial: {
                            y: "0%",
                        },
                        hovered: {
                            y: "-100%",
                        },
                    }}
                    className={twMerge(
                        "grid h-full place-content-center bg-neutral-950",
                        topDivClasses
                    )}
                >
                    {children}
                </motion.div>
                {/* Bottom div that shifts up to replace the top div on hover */}
                <motion.div
                    variants={{
                        initial: {
                            y: "100%",
                        },
                        hovered: {
                            y: "0%",
                        },
                    }}
                    className={twMerge(
                        "absolute inset-0 grid h-full place-content-center",
                        bottomDivClasses
                    )}
                >
                    {children}
                </motion.div>
            </motion.button>
        </MotionConfig>
    );
};

export default Buttons;


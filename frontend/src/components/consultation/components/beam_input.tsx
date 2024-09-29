import React, { useEffect } from 'react';
import { animate, useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Define the BeamInput component
const BeamInput: React.FC = () => {
    // Create a motion value for the rotation
    const turn = useMotionValue(0);

    // Use useEffect to animate the turn value
    useEffect(() => {
        animate(turn, 1, {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
        });
    }, [turn]);

    // Create a conic-gradient background using the motion value
    const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #6EE7B700 75%, #6EE7B7 100%)`;

    return (
        <div className="relative flex w-full items-center gap-2 border-t border-neutral-700 py-[10px] bg-neutral-950 pl-6 pr-1.5">
            <p className="w-full bg-transparent text-sm text-white"> Schedule free consultation </p>

            <button
                onClick={(e) => e.stopPropagation()}
                type="submit"
                className="group flex shrink-0 items-center gap-1.5 bg-emerald-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-transform active:scale-[0.985]"
            >
                <span>WhatsApp</span>
                <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100" />
            </button>

            <div className="pointer-events-none absolute inset-0 ">
                <motion.div
                    style={{
                        backgroundImage,
                    }}
                    className="mask-with-browser-support absolute -inset-[1px] border border-transparent bg-origin-border"
                />
            </div>
        </div>
    );
};

export default BeamInput;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { CONTENT } from './content';
import Buttons from './buttons';

const Right: React.FC = () => {
    const [idx, setIdx] = useState<number>(0);

    return (
        <div className="col-span-12 flex flex-col justify-between md:col-span-6">
            <div className="relative h-[276px] overflow-hidden md:h-[372px]">
                {CONTENT.map((c, itemIdx) => (
                    <motion.div
                        initial={false}
                        animate={{
                            opacity: idx === itemIdx ? 1 : 0,
                            y: idx === itemIdx ? 0 : 24,
                            filter: idx === itemIdx ? "blur(0px)" : "blur(2px)",
                        }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.3,
                        }}
                        style={{
                            pointerEvents: idx === itemIdx ? "all" : "none",
                        }}
                        className="absolute inset-0 grid place-content-center space-y-3 px-6 text-base font-light leading-relaxed text-neutral-400 md:px-12 md:text-lg"
                        key={itemIdx}
                    >
                        {c.content}
                    </motion.div>
                ))}

                <span className="pointer-events-none absolute -right-0 bottom-0 text-7xl text-neutral-800">
                    {idx + 1}/{CONTENT.length}
                </span>
            </div>

            <Buttons idx={idx} setIdx={setIdx} />
        </div>
    );
};

export default Right;

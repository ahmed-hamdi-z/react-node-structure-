import React, { lazy } from 'react';

// Components
const BeamInput = lazy(() => import("./beam_input"));

// Define the Left component
const Left: React.FC = () => (
    <div className="col-span-12 flex flex-col justify-between border-r border-neutral-700 md:col-span-6">
        <div className="px-6 py-20 md:px-10 md:py-20">
            <h1 className="text-4xl uppercase leading-tight md:text-5xl md:leading-tight">
                <span className="text-emerald-300">Click Agency </span>
                Ready to embark on your digital adventure?
            </h1>
        </div>
        {/* BeamInput component is assumed to be defined elsewhere */}
        <BeamInput />
    </div>
);

export default Left;

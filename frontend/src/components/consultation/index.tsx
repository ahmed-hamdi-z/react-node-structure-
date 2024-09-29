import React, { lazy } from 'react';

// Components
const Left = lazy(() => import("./components/left_section"));
const Right = lazy(() => import("./components/right_section"));

// Define the Consultation component as a functional component
const Consultation: React.FC = () => {
  return (
    <section className="mx-auto my-4 grid max-w-5xl grid-cols-12 border border-neutral-700 bg-neutral-900 text-neutral-50">
      {/* Render the Left component */}
      <Left />
      {/* Render the Right component */}
      <Right />
    </section>
  );
};

export default Consultation;

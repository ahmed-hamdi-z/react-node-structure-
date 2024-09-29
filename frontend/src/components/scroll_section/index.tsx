import {  useScroll } from "framer-motion";
import { useRef } from "react";

// Components
import Content from "./components/content";
import Images from "./components/images";

// Data
import { items } from "./components/items";

const ScrollSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  return (
    <>
      <div className="dark:bg-slate-600 p-4 grid place-items-center">
        <h1 className="text-2xl dark:text-white">Glimpse into our digital toolbox</h1>
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
    </>
  );
};

export default ScrollSection;

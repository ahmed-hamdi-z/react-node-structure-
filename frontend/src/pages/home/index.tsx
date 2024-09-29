// Dependencies
import SpinningBox from "@/components/spinning-box";
import { FC, lazy } from "react";

// Components
const Folding = lazy(() => import("@/components/folding"));
const Video = lazy(() => import("@/components/video"));
const ScrollSection = lazy(() => import("@/components/scroll_section"));
const SpringCards = lazy(() => import("@/components/cards"));
const Testimonials = lazy(() => import("@/components/testimonials"));
const Consultation = lazy(() => import("@/components/consultation"));


const Home: FC = () => {
  return (
    <div className="w-[100%] h-screen">

      <div className="">
        <Video /> 
      </div>

      <div className="">
        <Folding />
      </div>
      
      <div className="">
        <ScrollSection />
      </div>

      <div className="overflow-hidden">
        <SpinningBox />
      </div>
      
      <div className="">
        <SpringCards />
      </div>

      <div className="">
        <Testimonials />
      </div>

      <div className="">
        <Consultation />
      </div>
    </div>
  );
};

export default Home;

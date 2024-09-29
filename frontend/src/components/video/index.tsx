// Dependencies
import { FC } from "react";

// assets
import videoBg from "@/assets/videos/test.mp4";

const Video: FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-15"></div>

      <video
        className="w-full h-screen object-cover "
        src={videoBg}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;

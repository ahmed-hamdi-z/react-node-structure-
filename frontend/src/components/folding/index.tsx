// Dependencies
import { FC, lazy } from "react";

// Components
const Texts = lazy(() => import("./components/texts"));
const LogosLoop = lazy(() => import("./components/logos-loop"));
const LogoItem = lazy(() => import("./components/logo-item"));

// ICONS
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";

const Folding: FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-12 bg-neutral-950 bg-opacity-60 px-4 py-24 md:flex-row overflow-hidden">
     
      <div className="absolute inset-0 -z-10">

        <div className="absolute w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 rotate-45"></div>

        <div className="absolute w-full h-full bg-gradient-to-r from-indigo-400 via-blue-400 to-green-400 opacity-50 rotate-12"></div>

        <div className="absolute w-full h-full bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 opacity-60 -rotate-12"></div>
      </div>

      <Texts />
      <LogosLoop
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            <SiAmazon />
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            <SiGoogle />
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            <SiMeta />
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            <SiGithub />
          </LogoItem>,
          <LogoItem key={5} className="bg-purple-300 text-neutral-900">
            <SiTwitch />
          </LogoItem>,
        ]}
      />
    </div>
  );
};

export default Folding;

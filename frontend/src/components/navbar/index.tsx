// Dependencies
import { FC, lazy } from "react";

// components
const Logo = lazy(() => import("./components/logo"));
const MainMenu = lazy(() => import("@/components/menu"));


const MainNavbar: FC = () => {
  return (
    <div className=" ">
      <div className="z-50">
        <MainMenu />
      </div>
      <Logo />
    </div>
  );
};

export default MainNavbar;

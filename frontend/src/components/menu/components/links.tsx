// Dependencies
import { FC } from "react";

// Compenents
import Logo from "@/components/navbar/components/logo";
import MenuFooter from "./menu-footer";
import LinksContainer from "./links-container";

const LinksOverlay: FC = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <div className="flex p-2">
        <Logo />
      </div>

      <LinksContainer />
      <MenuFooter />
    </nav>
  );
};

export default LinksOverlay;

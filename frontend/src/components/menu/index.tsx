// Dependencies
import { FC } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// components
import HamburgerButton from "./components/menu-btn";
import LinksOverlay from "./components/links";

// Main function
const MainMenu: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

export default MainMenu;

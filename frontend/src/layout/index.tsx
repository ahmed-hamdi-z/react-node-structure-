// Dependencies
import { FC, lazy } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

// Config
import { CONFIG } from "@/utils/config";

//Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
import About from "@/pages/about";


const Layout: FC = () => {
  return (
    <Routes>
      <Route path={CONFIG.root_path} element={<LayoutStructure />} />
      <Route path={CONFIG.about_path} element={<About />} />
    </Routes>
  );
};

export default Layout;

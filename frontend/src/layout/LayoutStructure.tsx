// Dependencies
import { FC, lazy } from "react";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";
import ThemeSwitch from "@/components/theme";

// Components
const Footer = lazy(() => import("@/components/footer"));
const MainNavbar = lazy(() => import("@/components/navbar"));

// Pages
const Home = lazy(() => import("@/pages/home"));

const LayoutStructure: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );

  return (
    <main className={`main-layout direction-${direction} lang-${language}`}>
      <Row className="main-content">
        <Col className="fixed top-5 left-5 w-full z-10" xs="12">
          <ThemeSwitch />
          <MainNavbar />
        </Col>

        <Col xs="12">
          <Home />
        </Col>

        <Col xs="12">
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </main>
  );
};

export default LayoutStructure;

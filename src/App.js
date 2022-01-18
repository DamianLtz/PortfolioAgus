import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./routes/AboutMe";
import ScrollToTop from "./components/ScrollToTop";
import InfoProyecto from "./routes/InformacionProyecto";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <TransitionGroup component={null}>
        <CSSTransition timeout={350} classNames="fade" key={location.key} unmountOnExit={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path={`/informacionProyecto/:id`} element={<InfoProyecto />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;

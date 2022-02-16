import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { UseUserContext } from "./contexts/UserContext";
import { Routes, Route, useLocation } from "react-router-dom";

//Componentes: 
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./routes/AboutMe";
import ScrollToTop from "./components/ScrollToTop";
import InfoProyecto from "./routes/InformacionProyecto";
import NotAvailable from "./components/NotAvailable";

function App() {
  const location = useLocation();
  const { user } = UseUserContext();
  return (
    <>
      <ScrollToTop />
      <TransitionGroup component={null}>
        <CSSTransition timeout={350} classNames="fade" key={location.key} unmountOnExit={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path={`/informacionProyecto/:id`} element={user ? <InfoProyecto /> : <NotAvailable />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;

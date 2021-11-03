import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./routes/AboutMe";
import ScrollToTop from "./components/ScrollToTop";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key} unmountOnExit>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/AboutMe">
              <AboutMe />
            </Route>
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;

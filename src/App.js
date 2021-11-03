import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./routes/AboutMe";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" basename="/portfolio-agus">
          <Home />
        </Route>
        <Route exact path="/AboutMe">
          <AboutMe />
        </Route>
        <Redirect to="/" basename="/portfolio-agus"/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

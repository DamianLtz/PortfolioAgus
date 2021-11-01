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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/AboutMe">
          <AboutMe />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

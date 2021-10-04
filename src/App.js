import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        {/* header content  */}
        <Header></Header>
        <Switch>
          {/* if path route is "/"  */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* home route  */}
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* services route  */}
          <Route exact path="/services">
            <Services></Services>
          </Route>
          {/* about route  */}
          <Route exact path="/about">
            <About></About>
          </Route>
          {/* contact route  */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          {/* if no page found  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer content  */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

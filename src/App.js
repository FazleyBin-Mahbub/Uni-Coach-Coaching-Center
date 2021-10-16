import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import CoursePurchase from "./Components/CoursePurchase/CoursePurchase";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import Services from "./Components/Services/Services";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            {/* purchase course page  */}
            <PrivateRoute exact path="/purchase">
              <CoursePurchase></CoursePurchase>
            </PrivateRoute>
            {/* about route  */}
            <Route exact path="/about">
              <About></About>
            </Route>
            {/* contact route  */}
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            {/* blog route  */}
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            {/* register route  */}
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* login route  */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* if no page found  */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* footer content  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

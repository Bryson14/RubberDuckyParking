import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about-us">
            <AboutUs/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

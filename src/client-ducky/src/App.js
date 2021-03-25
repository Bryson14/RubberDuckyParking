import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Search from "./components/Search"
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";
import Details from "./components/Detail";
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
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/s">
            <Search/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/details">
            <Details/>
          </Route>
          {/*<Route path="/transaction">*/}
          {/*  <Transaction/>*/}
          {/*</Route>*/}
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

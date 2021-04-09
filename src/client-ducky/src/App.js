import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Search from "./components/Search"
import SignUp from "./components/SignUp";
import Details from "./components/Detail";
import Reservation from "./components/Reservation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css"

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated'));
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [spotType, setSpotType] = useState("");


  return (
      <Router>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken}/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home setLocation={setLocation} location={location} date={date} setDate={setDate}
                    setSpotType={setSpotType} spotType={spotType}/>
            </Route>
            <Route exact path="/login">
              <Login setToken={setToken} setIsAuthenticated={setIsAuthenticated}/>
            </Route>
            <Route path="/about-us">
            <AboutUs/>
          </Route>
          <Route path="/s">
            <Search setLocation={setLocation} location={location} date={date} setDate={setDate}
                    setSpotType={setSpotType} spotType={spotType}/>
          </Route>
          <Route path="/signup">
            <SignUp setToken={setToken} setIsAuthenticated={setIsAuthenticated}/>
          </Route>
          {/*Protected Paths*/}
          <Route path="/profile">
              <Profile isAuthenticated={isAuthenticated} token={token}/>
          </Route>
          <Route path="/details">
              <Details isAuthenticated={isAuthenticated} token={token}/>
          </Route>
          <Route path="/reservation">
              <Reservation isAuthenticated={isAuthenticated} token={token}/>
          </Route>
          {/*Protected Paths*/}
          </Switch>
          <Footer/>
        </div>
        ):
        <Switch>
          <Route path='/login'>
            <Login setToken={setToken} setIsAuthenticated={setIsAuthenticated}/>
          </Route>
          <Route path='/signup' >
            <SignUp setToken={setToken} setIsAuthenticated={setIsAuthenticated}/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

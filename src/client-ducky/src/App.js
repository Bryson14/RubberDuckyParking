import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css"

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if(token == null && localStorage.getItem('token')) {
      setToken(token)
    }
  }, [])

  return (
      <Router>
        <Header/>
        {token ? (
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route path="/about-us">
              <AboutUs/>
            </Route>
          </Switch>
          <Footer/>
        </div>
        ): 
        <Login setToken={setToken}/>
        }
      </Router>
  );
}

export default App;

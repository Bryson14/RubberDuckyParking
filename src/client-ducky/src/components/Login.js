import React from "react";
import  { Redirect } from 'react-router-dom'

const Login = ({setToken, setIsAuthenticated}) => {

    const handleButton = () => {
        console.log("The button is clicked");
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", "YouStuckAndrew");
        setToken("What the Hell?");
        return <Redirect to='/home' />
    }

    return (
        <div className="container narrow justify-content-center">
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button onClick={handleButton} className="btn btn-primary btn-block">Submit</button>
            <p>
                <a href="/signup">Create an account.</a>
            </p>
        </div>
    )
}

export default Login;
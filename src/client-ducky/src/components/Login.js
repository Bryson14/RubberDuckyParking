import React, {useState} from 'react';
import { useHistory, Link } from "react-router-dom"
import {signin} from '../auth/use-auth'

function Login({setToken, setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    let login = () => {
        if(username && password) {
            signin(username,password)
                .then((token) => {
                if(token){
                    setToken(token);
                    setIsAuthenticated(true);
                    history.push('/home');
                } else {
                    alert("Incorrect username and/or password!")
                    setUsername("");
                    setPassword("");
                }
                })
                .catch(error => {
                    alert("Server cannot authenticate!")
                    setUsername("");
                    setPassword("");})
        } else {
            alert("Username or Password incomplete!");
        }
    }

    let handleInputChange = (e) => {
        let inputType = e.target.id
        let val = e.target.value
        if(inputType == 'username') {
            setUsername(val)
        }
        if(inputType == 'password') {
            setPassword(val)
        }
    }

    return (
    <div className="container narrow justify-content-center">
        <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input type="text" className="form-control" placeholder="Username" id="username"
                   onChange={handleInputChange} value={username}/>
        </div>

        <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type="password" onChange={handleInputChange} className='form-control' id='password' placeholder='password' value={password}></input>
        </div>
        <button type="submit" onClick={login} className="btn btn-primary btn-block">Login</button>
        <Link to='/signup'>Register</Link>

    </div>
    )
}

export default Login;
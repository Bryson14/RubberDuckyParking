import React, {useState} from 'react';
import { useHistory, Link } from "react-router-dom"
import {signin} from '../auth/use-auth'

function Login({setToken, setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const errorStyle = {
        color: 'red'
    }

    let login = (e) => {
        if (e.type === 'click' || (e.type === 'keypress' && e.key === 'Enter')) {
            if (username && password) {
                signin(username, password)
                    .then((token) => {
                        if (token) {
                            setToken(token);
                            setIsAuthenticated(true);
                            history.push('/home');
                        } else {
                            setErrorMessage("Incorrect username and/or password!");
                        }
                    })
                    .catch(error => {
                        setErrorMessage("Server cannot authenticate!")
                        setUsername("");
                        setPassword("");
                    })
            } else {
                setErrorMessage("Invalid Entry");
            }
        } else {
            console.log("unwanted event");
        }
    }

    let handleInputChange = (e) => {
        let inputType = e.target.id
        let val = e.target.value
        setErrorMessage("")
        if(inputType === 'username') {
            setUsername(val)
        }
        if(inputType === 'password') {
            setPassword(val)
        }
    }

    return (
    <div className="container narrow justify-content-center">
        <p style={errorStyle}>{errorMessage}</p>
        <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input type="text" className="form-control" placeholder="Username" id="username"
                   onChange={handleInputChange} value={username} onKeyPress={login}/>
        </div>

        <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input onChange={handleInputChange} className='form-control'
                   id='password' type='password' placeholder='Password' value={password} onKeyPress={login}/>
        </div>
        <button type="submit" onClick={login} className="btn btn-primary btn-block">Submit</button>
        <Link to='/signup'>Register</Link>

    </div>
    )
}

export default Login;
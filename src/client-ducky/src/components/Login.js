import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import {signin} from '../auth/use-auth'

function Login({setToken, setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    let login = () => {
        if(username && password) {
            signin(username,password).then((token) => {
                setToken(token)
                setIsAuthenticated(true)
                history.push('/')
            })
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
            <input type="password" className="form-control" placeholder="Enter password" id='password'
                   onChange={handleInputChange} value={username}/>
        </div>



        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p>
            <a href="/signup">Create an Account</a>
        </p>
    </div>
    )
}

export default Login;
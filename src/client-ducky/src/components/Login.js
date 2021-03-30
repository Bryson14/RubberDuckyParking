import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import {signin} from '../auth/use-auth'

function Login({setToken}) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const history = useHistory();

    let login = () => {
        if(username && password) {
            signin(username,password).then((token) => {
                setToken(token)
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
        <div>
            <label htmlFor='username'>Username</label>
            <input onChange={handleInputChange} id='username' type='text' value={username}></input>
            <label htmlFor='password'>Password</label>
            <input onChange={handleInputChange} id='password' type='text' value={password}></input>
            <button onClick={login} type='submit'>Login</button>
        </div>
    )
}

export default Login;
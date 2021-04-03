import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import {signup} from '../auth/use-auth'

const SignUp = (setToken, setIsAuthenticated) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory();

    let handleInputChange = (e) => {
        let inputType = e.target.id
        let val = e.target.value
        if(inputType == 'username') {
            setUsername(val)
        }
        if(inputType == 'password') {
            setPassword(val)
        }
        if(inputType == 'firstName') {
            setFirstName(val)
        }
        if(inputType == 'lastName') {
            setLastName(val)
        }
        if(inputType == 'email') {
            setEmail(val)
        }
    }

    let handleSignUp = (e) => {
        console.log('yee')
        // let valid = validate() 
        if(username && password && email && firstName && lastName ) {
            console.log('ye1e')
            signup({
                username: username,
                password: password,
                email: email,
                first_name: firstName,
                last_name: lastName
            }).then(res => {
                console.log(res)
            })
        }
    }

    return (
        <div className="container narrow justify-content-center">
            <div className="form-group">
                <label>First Name</label>
                <input id='firstName' onChange={handleInputChange} type="text" className="form-control" placeholder="Enter name" />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input id='lastName' onChange={handleInputChange} type="text" className="form-control" placeholder="Enter last name" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input id='username' onChange={handleInputChange} type="text" className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input id='email' onChange={handleInputChange} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input id='password' onChange={handleInputChange} type="password" className="form-control" placeholder="Enter password" />
            </div>



            <button type='button' onClick={handleSignUp} className="btn btn-primary btn-block">Submit</button>
            <p>
                <a href="/login">Already have an account?</a>
            </p>
        </div>
    )
}

export default SignUp;
import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import {signout} from '../auth/use-auth'
import { useHistory } from "react-router-dom"


function Header({isAuthenticated}) {

    const history = useHistory()

    let handleSignout = () => {
        signout()
        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to="/about-us">Learn More</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/">List Your Spot</Link>
                    </li>
                    {
                        isAuthenticated ? (
                            <li className="nav-item">
                                <Link className='nav-link' onClick={handleSignout}>Signout</Link>
                            </li>

                        ): (
                            <li className="nav-item">
                                <Link className='nav-link' to='/login'>Signin</Link>
                            </li>
                        )
                    }
                </ul>
            </div>

      </nav>
  )
}
 
export default Header;
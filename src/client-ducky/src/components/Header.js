import React from 'react';
import { Link } from "react-router-dom"


function Header() {

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
                        <Link className='nav-link' to="/signup">List Your Spot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/login">Log In</Link>
                    </li>
                </ul>
            </div>

      </nav>
  )
}
 
export default Header;
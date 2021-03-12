import React from 'react';
import { Link } from "react-router-dom"

 
function Home() {
 
  return (
      <div>
          this is the home component
          <Link to="/about-us">About Us</Link>
      </div>
  )
}
 
export default Home;
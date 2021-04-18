import React from 'react';
import SearchBar from "./SearchBar";


function Home() {

  return (
    <div>
      <div className="text-center jumbotron">
        <h1>Way better than a Parking Spot</h1>
        <p className="accent-secondary">Book a reliable parking spot and forget the hassel!</p>
      </div>

      <div className="text-center container p-4">
        <SearchBar url="/s" method="GET" fullscreen={true}/>
      </div>
    </div>
  )
}

export default Home;
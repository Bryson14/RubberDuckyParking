import React from 'react';
import SearchBar from "./SearchBar";


function Home({location, setLocation, date, setDate, spotType, setSpotType}) {

  return (
    <div>
      <div className="text-center jumbotron">
        <h1>Way better than a Parking Spot</h1>
        <p className="accent-secondary">Book a reliable parking spot and forget the hassel!</p>
      </div>

      <div className="text-center container p-4">
        {/* TODO: FIGURE OUT HOW THIS FORM THING IS GOING TO WORK */}
        <SearchBar url="/s" method="GET" fullscreen={true} setSpotType={setSpotType}
                   setDate={setDate} setLocation={setLocation}/>
      </div>
    </div>
  )
}

export default Home;
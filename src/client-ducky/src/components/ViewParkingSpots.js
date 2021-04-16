import React, {useState, useEffect} from 'react';
import api from '../auth/api'
import ParkingSpotCard from "./ParkingSpotCard";
import LocationCard from "./LocationCard";

const ViewParkingSpots = () => {

    const [parkingSpots, setParkingSpots] = useState([]);

    const getLocations = () => {
        api.get(`parking-spots/`).then(res => {
            // TODO fix this error message when line 15 is turned on
            // Error: Objects are not valid as a React child
            // (found: object with keys {id}). If you meant to
            // render a collection of children, use an array instead.
            debugger;
            console.log("is array: ", Array.isArray(res.data));
            // setParkingSpots(res.data)
        })
    }

    useEffect(() => {
        getLocations()
    }, [parkingSpots]);

    return (
        <>
            {(parkingSpots.length > 0)?(
                <div>
                    {parkingSpots.map((l) => (
                        <ParkingSpotCard />
                    ))}
                </div>
            ):(
                <div className="location-card-error">
                    <p>I don't see any Parking Spots you've made. :(</p>
                    <p>Make a Parking Spot!</p>
                </div>
            )}

        </>
    )
}

export default ViewParkingSpots;
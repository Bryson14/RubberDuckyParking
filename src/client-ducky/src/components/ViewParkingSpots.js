import React, {useState} from 'react';
import api from '../auth/api'
import ParkingSpotCard from "./ParkingSpotCard";

const ViewParkingSpots = () => {

    const [parkingSpots, setParkingSpots] = useState([]);

    const getLocations = () => {
        api.get(`parking_spots/`).then(res => {
            setParkingSpots(res.data)
        })
    }

    return (

        <div>
            {}
            {parkingSpots.map((l) => (
                <ParkingSpotCard id={l.pk}/>
            ))}
        </div>
    )
}

export default ViewParkingSpots;
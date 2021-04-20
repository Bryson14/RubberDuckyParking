import React, { useState, useEffect } from 'react';
import api from '../auth/api'
import ParkingSpotCard from "./ParkingSpotCard";

const ViewParkingSpots = () => {

    const [parkingSpots, setParkingSpots] = useState([]);
    const [showParkingSpots, setShowParkingSpots] = useState(false);

    useEffect(() => {
        api.get(`parking-spots/myspots/`).then(res => {
            setParkingSpots(res.data)
        })
    }, [])

    const toggleShowParkingSpots = () => {
        setShowParkingSpots(!showParkingSpots)
    }


    return (
        <div>
            {(parkingSpots.length > 0) ? (
                <div>
                    <button className='btn btn-secondary' onClick={toggleShowParkingSpots}>
                        {showParkingSpots ? 'Hide ': 'See '} Your Parking Spots
                    </button>
                    <div className='locations-wrapper'>
                        {showParkingSpots ? (
                            <div>
                                {parkingSpots.map((s) => ( 
                                    <ParkingSpotCard spot={s} />
                                ))}
                            </div>
                        ) : ''
                        }
                    </div>
                </div>

            ) : (
                <div className="location-card-error">
                    <p>I don't see any Parking Spots you've made. :(</p>
                    <p>Make a Parking Spot!</p>
                </div>
            )}
        </div>
    )
}

export default ViewParkingSpots;
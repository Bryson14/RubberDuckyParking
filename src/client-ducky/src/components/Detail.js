import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import DetailCard from "./DetailCard";
import api from '../auth/api'

const Detail = ({spot_id, isAuthenticated, token}) => {

    const [parkingSpot, setParkingSpot] = useState({});
    const [spotIndex, setSpotIndex] = useState();

    function getSpot(pk) {
        api.get(`parking-spots/${pk}/`).then(res => {
            setParkingSpot(res.data)
            setSpotIndex(pk)
        })
    }

    const getPathname = () => {
        return window.location.pathname
    }

    useEffect(() => {
        let p = getPathname();
        p = p.split("/");
        if (p[p.length - 2] === "details") {
            let idx = Number(p[p.length - 1]);
            getSpot(idx);
            api.get(`parking-spots/${idx}/`)
                .then(res => {
                    if(res.data) {
                        setParkingSpot(res.data)
                        console.log("Setting data")
                    } else {
                        console.log("No data from server!")
                    }
                }).catch(err => {
                    console.log("Error getting details from server!")
            })
        }
    }, []);

    const notLoggedIn = () => {
        return (
            <div>
                <h2>Whoops, it looks like your not logged in.</h2>
                <p>Please login and return to make a reservation</p>
            </div>
        )
    }

    return (
            <div className="container">
                <img src="public/top_down_parking_stock.jpg" alt="You're next parking spot is waiting!"/>
                {(isAuthenticated) ?
                    (
                        (parkingSpot) ?
                                (<DetailCard
                                    key={parkingSpot.pk}
                                    id={parkingSpot.pk}
                                    parking_size={parkingSpot.parking_size}
                                    price={parkingSpot.price}
                                    location={parkingSpot.location}
                                    notes={parkingSpot.notes}
                                    actual_width={parkingSpot.actual_width}
                                    actual_length={parkingSpot.actual_length}
                                    owner={parkingSpot.owner}
                                />):
                                (<h2>Something isn't right. Please check the parking spot's index.</h2>)
                    ): (
                        notLoggedIn()
                    )}
            </div>
    )
}

export default Detail;
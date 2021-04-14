import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import DetailCard from "./DetailCard";
import api from '../auth/api'

const Detail = ({spot_id, isAuthenticated, token}) => {

    const [parkingSpot, setParkingSpot] = useState({});
    const [spotIndex, setSpotIndex] = useState();

    function getSpot(pk) {
        api.get(`parking-spots/${pk}/`).then(res => {
            debugger;
            setParkingSpot(res.data)
            setSpotIndex(pk)
        })
    }

    const getPathname = () => {
        const pathname = window.location.pathname
        return pathname;
    }

    useEffect(() => {
        let p = getPathname();
        p = p.split("/");
        if (p[p.length - 2] === "details") {
            let idx = Number(p[p.length - 1]);
            getSpot(idx);
            api.get(`parking-spots/?${idx}`)
                .then(res => {
                    if(res.data) {
                        setParkingSpot(res.data)
                        console.log("Setting data")
                    } else {
                        console.log("No data from server!")
                    }
                }).catch( () => {
                console.log("Error fetching data for the search page!")
            })
        }
    }, []);

    function authenticate () {
        return isAuthenticated;
    }

    return (
            <div className="container">
                {(authenticate()) ?
                    (
                        <p>Logged In</p>
                    ): (
                        <p>Not Logged in :(</p>
                    )}

                {!Number.isNaN(spotIndex) ?
                    <DetailCard key={parkingSpot.id} id={parkingSpot.id} data={parkingSpot}/>
                    :
                    <h2>Something isn't right. Please check the parking spot's index.</h2>
                }

            </div>
    )
}

export default Detail;
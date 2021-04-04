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
        const pathname = window.location.pathname
        return pathname;
    }

    useEffect(() => {
        let p = getPathname();
        p = p.split("/");
        if (p[p.length - 2] === "details") {
            let idx = Number(p[p.length - 1]);
            getSpot(idx);
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
                    <DetailCard key={parkingSpot.id} id={parkingSpot.id} title={parkingSpot.title}
                                spot_type={parkingSpot.spot_type} price={parkingSpot.price} information={parkingSpot.desc}/>
                    :
                    <h2>Something isn't right. Please check the parking spot's index.</h2>
                }

            </div>
    )
}

export default Detail;
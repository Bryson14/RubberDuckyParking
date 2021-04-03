import {api} from "../auth/api";
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import DetailCard from "./DetailCard";

const staticData = {
    id: 3,
    title: "Aggie Parking lot",
    desc: "This is the parking lot between the spectrum and the football stadium",
    spot_type: "Standard",
    price: 7.5,
    actual_width: 8.0,
    actual_length: 18.5,
}

const Detail = ({spot_id, isAuthenticated, token}) => {

    const [parkingSpot, setParkingSpot] = useState({});
    const [spotIndex, setSpotIndex] = useState(spot_id);

    function get_data(idx) {
        // todo make this api route
        // return api.get(`/details/${idx}`).then(response => {
        //     setParkingSpot(response);
        // })
        setSpotIndex(idx);
        setParkingSpot(staticData);
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
            get_data(idx);
        }
    });

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
// import {useAuth} from "../auth/use-auth"
import React, {useState, useEffect} from 'react';

const Details = ({spot_id}) => {

    // const auth = useAuth()
    // const api = auth.api

    const [parkingSpot, setParkingSpot] = useState({})

    // function get_data() {
    //     // todo make this api route
    //     return api.get(`/details/${spot_id}`).then(response => {
    //         return response
    //             setParkingSpot(response)
    //     })
    // }

    return (
        <div>
            <h2>Getting information from db about spot id: {spot_id}</h2>
            <p>Here it will show different information and prices and the owners name</p>

            <button>Rent Spot</button>
            {/*{parkingSpot ? (*/}
            {/*    render the parking spot*/}
            {/*): <div>not yet</div>}*/}
        </div>
    )
}

export default Details;
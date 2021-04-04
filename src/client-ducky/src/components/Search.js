import SearchBar from "./SearchBar";
import ParkingCard from "./ParkingCard";
import React, {useState, useEffect} from 'react';
import api from '../auth/api'


const Search = () => {

    const [parkingSpots, setParkingSpots] = useState([])

    function getParkingSpots() {
        const params = new URLSearchParams(window.location.search);
        let location = params.get('location');
        // let date = params.get('date');
        let spotType = params.get('size-type');
        api.get(`parking-spots/?location=${location}&size=${spotType}`).then(res => {
            if(res.data) {
                setParkingSpots(res.data)
            }
        })
    }

    useEffect(() => {
        getParkingSpots();
    }, []);

    return (
        <div className="container text-center">
            <h1>Search</h1>
            <div>
                <SearchBar url="/s" method="GET" fullscreen={false}/>
            </div>
            <div className="container">
                {parkingSpots.length > 0 ?
                    parkingSpots.map((spot) => (
                        <ParkingCard
                            key={spot.pk}
                            id={spot.pk}
                            location={spot.location}
                            size={spot.parking_size}
                            price={spot.price}
                        />
                    )) :
                    <div className="container">
                        <h3 className="p-5 m-5">Whoops! No Data Found );</h3>
                        <p>Please try searching for something different</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;
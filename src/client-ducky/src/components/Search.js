import SearchBar from "./SearchBar";
import ParkingCard from "./ParkingCard";
import React, {useState, useEffect} from 'react';
import api from '../auth/api'


const Search = () => {

    const [parkingSpots, setParkingSpots] = useState([]);
    const [searchLocation, setSearchLocation] = useState([]);
    const [date, setDate] = useState([]);
    const [spotType, setSpotType] = useState([]);


    function getParkingSpots() {
        const params = new URLSearchParams(window.location.search);
        let location = params.get('location');
        let date = params.get('date');
        let spotType = params.get('size-type');
        api.get(`parking-spots/?location=${location}&size=${spotType}&data=${date}`)
            .then(res => {
            if(res.data) {
                setParkingSpots(res.data)
                console.log("Setting data")
            } else {
                console.log("No data from server!")
            }
        }).catch( () => {
            console.log("Error fetching data for the search page!")
        })
    }

    useEffect(() => {
        getParkingSpots();
    }, []);

    return (
        <div className="container text-center">
            <h1>Search</h1>
            <div>
                <SearchBar url="/s" method="GET" fullscreen={false}
                           location={searchLocation} date={date} type={spotType} />
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
                            notes={spot.notes}
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
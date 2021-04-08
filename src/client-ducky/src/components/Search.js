import SearchBar from "./SearchBar";
import ParkingCard from "./ParkingCard";
import React, {useState, useEffect} from 'react';
import api from '../auth/api'


const sData = [
    {
        pk: 1,
        title: "The best parking spot for TailGaiters",
        desc: "If you are a tailgater, get this spot",
        parking_size: "Tailgater Paradise",
        price: 45.0
    },
    {
        pk: 2,
        title: "Cheap Motorcycle Spot",
        desc: "Super simple spot, safe for long storage of motorcycle",
        parking_size: "Motorcycle",
        price: 4.0
    },
    {
        pk: 3,
        title: "Aggie Parking lot",
        desc: "This is the parking lot between the spectrum and the football stadium",
        parking_size: "Standard",
        price: 7.5
    },
    {
        pk: 4,
        title: "Drive Way Close to Stadium",
        desc: "Park on the left side of driveway for the game. Close, quick, convenient, cheap!",
        parking_size: "Standard",
        price: 6.0
    }
]

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
        api.get(`parking-spots/?location=${location}&size=${spotType}&date=${date}`)
            .then(res => {
                // TODO backend not returning data
            if(res.data.length > 0) {
                setParkingSpots(res.data)
                console.log("Setting data")
            } else {
                console.log("No data from server!, setting false data")
                setParkingSpots(sData)
            }
        }).catch( () => {
            console.log("Error fetching data for the search page! SEtting false data")
            setParkingSpots(sData);
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
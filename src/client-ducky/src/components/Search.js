import SearchBar from "./SearchBar";
import ParkingCard from "./ParkingCard";
import React, {useState, useEffect} from 'react';

const sData = [
    {
        id: 1,
        title: "The best parking spot for TailGaiters",
        desc: "If you are a tailgater, get this spot",
        spot_type: "Tailgater Paradise",
        price: 45.0
    },
    {
        id: 2,
        title: "Cheap Motorcycle Spot",
        desc: "Super simple spot, safe for long storage of motorcycle",
        spot_type: "Motorcycle",
        price: 4.0
    },
    {
        id: 3,
        title: "Aggie Parking lot",
        desc: "This is the parking lot between the spectrum and the football stadium",
        spot_type: "Standard",
        price: 7.5
    },
    {
        id: 4,
        title: "Drive Way Close to Stadium",
        desc: "Park on the left side of driveway for the game. Close, quick, convenient, cheap!",
        spot_type: "Standard",
        price: 6.0
    }
]


const Search = () => {

    // const auth = useAuth()
    // const api = auth.api

    const [searchData, setSearchData] = useState({})

    function get_data() {
        const params = new URLSearchParams(window.location.search);
        console.log("params:", params);
        let location = params.get('location');
        let date = params.get('date');
        let spotType = params.get('size-type');
        console.log(
            `loc: ${location === "" ? "Empty String" : location}, 
            date: ${date === "" ? "Empty String" : date}, 
            spot: ${spotType === "" ? "Empty String" : spotType}`);
        // todo make this api call
        // sData = api.get(`/s?location=${location}&date=${date}&spotType=${spotType}`);
        setSearchData(sData)
    }

    useEffect(() => {
        get_data();
    });

    return (
        <div className="container text-center">
            <h1>Search</h1>
            <div>
                <SearchBar url="/s" method="GET" fullscreen={false}/>
            </div>
            <div className="container">
                {searchData.length > 0 ?
                    searchData.map((s) => (
                        <ParkingCard key={s.id} id={s.id} title={s.title}
                                     spot_type={s.spot_type} price={s.price} information={s.desc}/>
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
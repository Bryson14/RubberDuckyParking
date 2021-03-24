import SearchBar from "./SearchBar";
import ParkingCard from "./ParkingCard";
import React, {useState, useEffect} from 'react';

const sData = [
    {
        id: 1,
        title: "The best parking spot for TailGaiters",
        desc: "If you are a tailgater, get this spot",
        price: 12.0
    },
    {
        id: 2,
        title: "Cheap Motorcycle Spot",
        desc: "Super simple spot, safe for long storage of motorcycle",
        price: 4.0
    },
    {
        id: 3,
        title: "Aggie Parking lot",
        desc: "This is the parking lot between the spectrum and the football stadium",
        price: 7.5
    }
]


const Search = () => {

    // const auth = useAuth()
    // const api = auth.api

    const [searchData, setSearchData] = useState({sData})

    // function get_data() {
    //     setSearchData(sData)
    // }

    // useEffect(() => {
    //     get_data()
    // });

    return (
        <div>
            <h1>Search</h1>
            <p>This page will have different tile components and stuff</p>
            <SearchBar url="/s" method="GET" fullscreen={false}/>
            <div>
                <p>Some results here</p>
                {sData.map((s) => (
                    <ParkingCard key={s.id} title={s.title} information={s.desc}/>
                ))}

            </div>
        </div>
    )
}

export default Search;
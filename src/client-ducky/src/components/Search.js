import SearchBar from "./SearchBar";
import ParkingCard from "./ParkingCard";

const Search = () => {

    return (
        <div>
            <h1>Search</h1>
            <p>This page will have different tile components and stuff</p>
            <SearchBar url="/s" method="GET" fullscreen={false}/>
            <div>
                <p>Some results here</p>
                <ParkingCard title="Crazy cool spot" information="This spot will blow your socks off" img_src="idk"/>
            </div>
        </div>
    )
}

export default Search;
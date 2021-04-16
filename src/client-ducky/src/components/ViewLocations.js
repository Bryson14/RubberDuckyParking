import React, {useState, useEffect} from 'react';
import api from '../auth/api'
import LocationCard from "./LocationCard";

const ViewLocations = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, [locations])

    const getLocations = () => {
        api.get(`parking-spots/`).then(res => {
            // TODO fix me, objects are not valid react children??
            // setLocations(res.data);

        })
        console.log("locations: ", locations);
    }

    return (
    <>
        {(locations.length > 0)?(
            <div>
                {locations.map((l) => (
                    <LocationCard />
                ))}
            </div>
        ):(
            <div className="location-card-error">
                <p>I don't see any locations you've made. :(</p>
                <p>Make a Location!</p>
            </div>
        )}

    </>
        )
}

export default ViewLocations;
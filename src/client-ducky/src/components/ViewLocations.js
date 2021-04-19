import React, {useState, useEffect} from 'react';
import api from '../auth/api'
import LocationCard from "./LocationCard";

const ViewLocations = () => {

    const [locations, setLocations] = useState([]);
    const [showLocations, setShowLocations] = useState(false);

    useEffect(() => {
        api.get(`locations/`).then(res => {
            setLocations(res.data)
        })
    }, [])

    const toggleShowLocations = () => {
        setShowLocations(!showLocations)
    }


    return (
        <div>
            {(locations.length > 0)?(
                <div>
                    <button className='btn btn-secondary' onClick={toggleShowLocations}>
                        {showLocations ? 'Hide ': 'See '} Your Locations
                    </button>
                    <div className='locations-wrapper'>
                        {showLocations ? (
                            <div>
                                {locations.map((l) => (
                                <LocationCard location={l} />
                                ))}
                            </div>
                        ) : ''
                        }
                    </div>
                </div>
            ):(
                <div className="location-card-error">
                    <p>I don't see any locations you've made. :(</p>
                    <p>Make a Location!</p>
                </div>
            )}
        </div>
    

        )
}

export default ViewLocations;
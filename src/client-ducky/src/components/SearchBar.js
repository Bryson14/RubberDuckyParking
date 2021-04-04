import React, { useEffect, useState } from "react";
import api from '../auth/api'

const SearchBar = ({url, method, fullscreen}) => {
    // fullscreen will be a bool whether the form should take up the entire page or if its a smaller bar now
    // at the top of the screen

    const [parkingSpots, setParkingSpots] = useState([])

    const searchBarStyle = {
        "maxWidth": "85%",
        "borderRadius": "2rem"
    };

    if (!fullscreen) {
        searchBarStyle["maxWidth"] = "55%";
    }

    function handleClick() {
        console.log("searched clicked");
    }

    useEffect(() => {
        api.get('parking-sizes/').then(res => {
            setParkingSpots(res.data)
        })
    }, [])

    return (
        <div className="form-div justify-content-center" style={searchBarStyle}>
            <form  method={method} action={url}>
                <div className="form-row p-4">
                    <div className="form-group col-lg-4 col-sm-12">
                        <input type="text"
                               className="form-control"
                               placeholder={fullscreen ? "Where are you parking" : "Location"}
                               aria-label="Location"
                               name="location" />
                    </div>
                    <div className="form-group col-lg-3 col-sm-12">
                        <input type="date" className="form-control datepicker" placeholder="Select Date" name="date" />
                    </div>
                    <div className="form-group col-sm-12 col-lg-4">
                        <select className="custom-select" id="size-type" name="size-type">
                            <option value="" disabled>Parking Spot Size</option>
                            {parkingSpots.map((s) => (
                                <option name="size-type" key={s.pk} value={s.pk} >
                                    {s.name + "  |  " + s.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-lg-1">
                        <button onClick={handleClick} className="btn btn-outline-warning btn-lg"><i className="fa fa-search">Search</i></button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SearchBar;
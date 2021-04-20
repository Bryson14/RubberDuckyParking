import React, { useEffect, useState } from "react";
import api from '../auth/api'

const SearchBar = ({url, method, fullscreen}) => {
    // fullscreen will be a bool whether the form should take up the entire page or if its a smaller bar now
    // at the top of the screen

    const [parkingSpots, setParkingSpots] = useState([])
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(null);
    const [parkingTypeIdx, setParkingTypeIdx] = useState(null);

    let searchBarStyle = "form-div justify-content-center"

    if (!fullscreen) {
        searchBarStyle += " small-search-bar";
    } else {
        searchBarStyle += " search-bar";
    }

    useEffect(() => {
        api.get('parking-sizes/').then(res => {
            setParkingSpots(res.data)
        })
        if (window.location.pathname === "/s") {
            const params = new URLSearchParams(window.location.search);
            let spotType = params.get('size-type');
            setLocation(params.get('location'));
            setDate(params.get('date'));
            let select = document.getElementById('size-type');
            select.selectedIndex = spotType;
        }

    }, [])
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleSpotType = (e) => {
        let v = e.target.value
        setParkingTypeIdx(v);
        
    }

     return (
        <div className={searchBarStyle}>
            <form  method={method} action={url}>
                <div className="form-row p-4">
                    <div className="form-group col-lg-4 col-sm-12">
                        <input type="text"
                               className="form-control"
                               placeholder={fullscreen ? "Where are you parking" : "Location"}
                               aria-label="Location"
                               name="location"
                                value = {location}
                               onChange={handleLocation}/>
                    </div>
                    <div className="form-group col-lg-3 col-sm-12">
                        <input type="date" className="form-control datepicker"
                               placeholder="Select Date" name="date" onChange={handleDate}/>
                    </div>
                    <div className="form-group col-sm-12 col-lg-4">
                        <select className="custom-select" id="size-type" name="size-type" onChange={handleSpotType}>
                            <option className='null-input' value={null} >Parking Spot Size</option>
                            {parkingSpots.map((s) => (
                                <option name="size-type" key={s.pk} value={s.pk} >
                                    {s.name + "  |  " + s.min_width + " x " + s.min_length + "ft"}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-lg-1">
                        <button className="btn btn-outline-warning btn-lg"><i className="fa fa-search">Search</i></button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SearchBar;
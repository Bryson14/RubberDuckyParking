import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import api from '../auth/api'

const SearchBar = ({url, method, fullscreen, setDate, setSpotType, setLocation, date, type}) => {
    // fullscreen will be a bool whether the form should take up the entire page or if its a smaller bar now
    // at the top of the screen

    const fakeData = [
        {
            pk: 1,
            value: 'standard',
            text: "Standard",
            size: "(8.5 x 18 ft)"
        },
        {
            pk: 2,
            value: 'rv',
            text: "Recreational Vehicle",
            size: "(12 x 45 ft)"

        },
        {
            pk: 3,
            value: 'compact',
            text: "Compact",
            size: "(8 x 16 ft)"
        },
        {
            pk: 4,
            value: 'tailgater',
            text: "Tailgater Paradise",
            size: "(20 x 25 ft)"
        },
        {
            pk: 5,
            value: 'motorcycle',
            text: "Motorcycle",
            size: "(4 x 9 ft)"
        },
        {
            pk: 6,
            value: 'bus',
            text: "Bus",
            size: "(12 x 45 ft)"
        }
    ];

    const [parkingSpots, setParkingSpots] = useState(fakeData)
    const history = useHistory()

    const searchBarStyle = {
        "maxWidth": "85%",
        "borderRadius": "2rem"
    };

    if (!fullscreen) {
        searchBarStyle["maxWidth"] = "55%";
    }

    function handleClick() {
        debugger;
        console.log("searched clicked");
        history.push('/s');
    }

    useEffect(() => {
        api.get('parking-sizes/').then(res => {
            if (res.data.length > 0) {
                setParkingSpots(res.data)
            } else {
                setParkingSpots(fakeData);
            }

        })
    }, [])

    function inputLocationChange(e) {
        setLocation(e.target.value);
    }

    function dateInputChange(e) {
        setDate(e.target.value);
    }

    function spotTypeInputChange(e) {
        setSpotType(e.target.value);
    }


    return (
        <div className="form-div justify-content-center" style={searchBarStyle}>
            <form  method={method} action={url}>
                <div className="form-row p-3 mx-auto pull-right">
                    <div className="form-group col-lg-4 col-sm-12">
                        <input type="text"
                               className="form-control"
                               placeholder={fullscreen ? "Where are you parking" : "Location"}
                               aria-label="Location"
                               name="location"
                                onChange={inputLocationChange}/>
                    </div>
                    <div className="form-group col-lg-4 col-sm-12">
                        <input type="date" className="form-control datepicker" placeholder="Select Date" name="date"
                        onChange={dateInputChange}/>
                    </div>
                    <div className="form-group col-lg-3 col-sm-12">
                        <select className="custom-select" id="size-type" name="size-type" onChange={spotTypeInputChange}>
                            <option value="" disabled>Parking Spot Size</option>
                            {parkingSpots.map((s) => (
                                <option name="size-type" key={s.pk} value={s.value} >
                                    {s.text + "  |  " + s.size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-lg-1 col-sm-12">
                        <button onClick={handleClick} onKeyPress={handleClick} className="btn btn-outline-warning"><i>Search</i></button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SearchBar;
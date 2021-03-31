import React from "react";

const SearchBar = ({url, method, fullscreen}) => {
    // fullscreen will be a bool whether the form should take up the entire page or if its a smaller bar now
    // at the top of the screen

    const parking_spots = [
        {
            id: 1,
            value: 'standard',
            text: "Standard",
            size: "(8.5 x 18 ft)"
        },
        {
            id: 2,
            value: 'rv',
            text: "Recreational Vehicle",
            size: "(12 x 45 ft)"

        },
        {
            id: 3,
            value: 'compact',
            text: "Compact",
            size: "(8 x 16 ft)"
        },
        {
            id: 4,
            value: 'tailgater',
            text: "Tailgater Paradise",
            size: "(20 x 25 ft)"
        },
        {
            id: 5,
            value: 'motorcycle',
            text: "Motorcycle",
            size: "(4 x 9 ft)"
        },
        {
            id: 6,
            value: 'bus',
            text: "Bus",
            size: "(12 x 45 ft)"
        }
    ];

    const searchBarStyle = {
        "maxWidth": "85%;",
        "border-radius": "2rem;"
    };

    if (!fullscreen) {
        searchBarStyle["maxWidth"] = "55%";
    };

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
                            {parking_spots.map((s) => (
                                <option name="size-type" key={s.id} value={s.value} >
                                    {s.text + "  |  " + s.size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-lg-1">
                        <button className="btn btn-outline-warning btn-lg"><i className="fa fa-search">Search</i></button>
                    </div>

                </div>
                {/*<fieldset>*/}
                {/*    <legend>*/}
                {/*        {fullscreen ? <h2>Search Parking</h2> : <p> </p>}*/}
                {/*    </legend>*/}
                {/*    <div className="row">*/}
                {/*        <div className="input-group mb-3 p-2">*/}
                {/*            <div className="col-lg-4 col-md-12">*/}
                {/*                <input type="text" className="form-control"*/}
                {/*                       placeholder={fullscreen ? "Where are you parking" : "Location"}*/}
                {/*                       aria-label="Location" name="location" />*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-3 col-md-12">*/}
                {/*                <input type="date" className="form-control datepicker" placeholder="Select Date" name="date" />*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-4 col-md-12">*/}
                {/*                <select className="custom-select" id="size-type" name="size-type">*/}
                {/*                    <option value="" disabled>Parking Spot Size</option>*/}
                {/*                    {parking_spots.map((s) => (*/}
                {/*                        <option name="size-type" key={s.id} value={s.value} >*/}
                {/*                            {s.text + "  |  " + s.size}*/}
                {/*                        </option>*/}
                {/*                    ))}*/}
                {/*                </select>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-1 col-md-12">*/}
                {/*                <button className="btn btn-outline-warning btn-lg"><i className="fa fa-search">Search</i></button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</fieldset>*/}
            </form>
        </div>
    )
}

export default SearchBar;
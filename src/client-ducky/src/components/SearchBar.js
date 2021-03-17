const SearchBar = ({url, method, fullscreen}) => {
    // fullscreen will be a bool whether the form should take up the entire page or if its a smaller bar now
    // at the top of the screen

    return (
        <form  method={method} action={url}>
            <fieldset>
                <div className="row">
                    <legend>
                        <h2>Search Parking</h2>
                    </legend>
                    <div className="input-group mb-3">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-2 mx-lg-1">
                            <input type="text" className="form-control" placeholder="Where are you parking?" aria-label="Location" name="location" />
                        </div>
                        <div className="col-lg-3 col-md-12 mb-4 mb-md-2 mx-lg-1">
                            <input type="date" className="form-control datepicker" placeholder="Select Date" name="date" />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-2 mx-lg-1">
                            <select className="custom-select" id="size-type" name="size-type">
                                <option value="" disabled selected>Parking Spot Size</option>
                                <option>Standard</option>
                                <option>RV</option>
                                <option>Tailgater Paradise</option>
                                <option>Motorcycle</option>
                                <option>Compact</option>
                                <option>Special</option>
                            </select>
                        </div>
                        <div className="input-group-append col-lg-1 col-md-12 mb-4 mb-md-0 mx-lg-1">
                            <button className="btn btn-outline-warning btn-lg"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default SearchBar;
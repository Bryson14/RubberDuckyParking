import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import api from '../auth/api'
import "../css/styles.css"

const AddParkingSpotModal = ({ showModal, toggleModal }) => {

    const [userId, setUserId] = useState({});
    const [parkingSpots, setParkingSpots] = useState([]);
    const [size, setSize] = useState("");
    const [l, setL] = useState("");
    const [w, setW] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");


    const history = useHistory();

    function changeSize(e) {
        setSize(e.target.value);
    }
    function changeLength(e) {
        setL(e.target.value);
    }
    function changeWidth(e) {
        setW(e.target.value);
    }
    function changePrice(e) {
        setPrice(e.target.value);
    }
    function changeLocation(e) {
        setLocation(e.target.value);
    }
    function changeNotes(e) {
        setNotes(e.target.value);
    }


    const handleSubmit = () => {
        console.log('making parking spot')
        // if (userId === "") {
        //     alert("Server was not able to identify you, sorry");
        // } else if (size !== "" && l !== "" && w !== "" && price !== "" && location !== "" && notes !== "" ) {
        //     const data = {
        //         uid: 5,
        //         parking_size:size,
        //         actual_width: w,
        //         actual_length: l,
        //         price: price,
        //         location: location,
        //         notes: notes,
        //         owner: userId.pk
        //     }
        //     console.log("posting new spot: \n", data);
        //     // api.post('parking-spots/, data)
        //     //     .then((r) => {
        //     //         console.log(r.data);
        //     //     })
        // }
    }


    return (
        <div className={showModal ? "modal-wrap" : "hide"}>
            <div className="modal-content">
                <div className="modal-message">
                    <label for='size-type'>Parking Spot Size</label>
                    <select className="custom-select form-control" id="size-type" name="size-type" onChange={changeSize}>
                        <option value="" disabled>Parking Spot Size</option>
                        {parkingSpots.map((s) => (
                            <option name="size-type" key={s.pk} value={s.pk} >
                                {s.name + "  |  " + s.min_width + " x " + s.min_length + "ft"}
                            </option>
                        ))}
                    </select>
                    <div className="form-group">
                        <label>Actual Width (ft)</label>
                        <input id='actualWidth' type="number" min="5" max="100" className="form-control" onChange={changeLength}
                            placeholder="The Actual Width of this parking spot in feet" />
                    </div>

                    <div className="form-group">
                        <label>Actual Length (ft)</label>
                        <input id='actualLength' type="number" min="5" max="50" className="form-control" onChange={changeWidth}
                            placeholder="The Actual Length of this parking spot in feet" />
                    </div>

                    <div className="form-group">
                        <label>Price per Hour</label>
                        <input id='price' type="number" min="0.5" onChange={changePrice}
                            max="100" className="form-control" placeholder="Cost of spot per hour" />
                    </div>

                    <div className="form-group">
                        <label className=''>Location</label>
                        <br />
                        <select id="location" name="name" className="form-select" onChange={changeLocation}>
                            <option>Get the User's locations from api</option>
                            <option>Wow still haven't done it yet?</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Notes</label>
                        <input id='notes' type="text" className="form-control" onChange={changeNotes}
                            placeholder="Example: 'The right side of my driveway' or 'Spot 34'" />
                    </div>
                </div>
                <div className='modal-actions'>
                    <button type='button' onClick={handleSubmit} className="btn btn-primary btn-block">Create Spot</button>
                    <button onClick={toggleModal} type='button' className="btn btn-primary btn-block">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddParkingSpotModal;
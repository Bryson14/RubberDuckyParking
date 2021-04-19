import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from '../auth/api'
import "../css/styles.css"

const AddParkingSpotModal = ({ showModal, toggleModal }) => {

    const [parkingSizes, setParkingSizes] = useState([]);
    const [locations, setLocations] = useState([]);
    const [size, setSize] = useState(null);
    const [l, setL] = useState("");
    const [w, setW] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState(null);
    const [notes, setNotes] = useState("");


    useEffect(() => {
        api.get('parking-sizes/').then(res => {
            setParkingSizes(res.data)
        })
        api.get('locations/mylocations/').then(res => {
            setLocations(res.data)
        })
    }, [])


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

    const validateData = () => {
        return (
            size.replace(/\s+/g, '') !== ''
            &&
            l.replace(/\s+/g, '') !== ''
            &&
            w.replace(/\s+/g, '') !== ''
            &&
            price.replace(/\s+/g, '') !== ''
            &&
            notes.replace(/\s+/g, '') !== ''
            &&
            location.replace(/\s+/g, '') !== ''
            &&
            size !== null
            &&
            location !== null

        )
    }


    const handleSubmit = () => {
        let valid = validateData()
        if(valid)  {
            let data = {
                price: price,
                notes: notes,
                actual_width: w,
                actual_length: l,
                parking_size: size,
                location: location

            }
            api.post('/parking-spots/', data).then(res => {
                if(res.status === 200) {
                    toggleModal()
                    window.location.reload()
                } else {
                    alert('error saving parking spot')
                }
            })
        }
    }


    return (
        <div className={showModal ? "modal-wrap" : "hide"}>
            <div className="modal-content">
                <div className="modal-message">
                    <label for='size-type'>Parking Spot Size</label>
                    <select className="custom-select form-control" id="size-type" name="size-type" onChange={changeSize}>
                        <option name="size-type" value={''} >----------</option>
                        {parkingSizes.map((s) => (
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
                        <select id="location" name="name" className=" custom-select form-control" onChange={changeLocation}>
                            <option name="size-type" value={''} >----------</option>
                            {locations.map((l) => (
                                <option name="size-type" key={l.pk} value={l.pk} >
                                    {l.name + "    " + l.city + " " + l.state}
                                </option>
                            ))}
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
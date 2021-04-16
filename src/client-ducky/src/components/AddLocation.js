import React, {useState, useEffect} from 'react';
import api from '../auth/api'

const AddLocation = () => {

    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const getHostID = () => {
        api.get(`users/me/`).then(res => {
            debugger;
            setUserId(res.data)
        })
    }

    useEffect(() => {
        getHostID();
    })

    const handleSubmit = (e) => {
        if (userId === "") {
            alert("Server was not able to identify you, sorry");
        } else if (name !== "" && desc !== "" && address !== "" && city !== "" && state !== "" && zip !== "" ) {
            const data = {
                host: userId,
                name: name,
                description: desc,
                address: address,
                city: city,
                state: state,
                zip_code: zip
            }
            // api.post()
        }
    }

    function changeName(e) {
        setName(e.target.value)
    }

    function changeDesc(e) {
        setDesc(e.target.value)
    }

    function changeAddress(e) {
        setAddress(e.target.value)
    }

    function changeCity(e) {
        setCity(e.target.value)
    }

    function changeState(e) {
        setState(e.target.value)
    }

    function changeZip(e) {
        const maxlength = 5;
        let val = e.target.value;
        if (val.length > maxlength) {
            val = val.slice(0,maxlength)
        }
        if (isNaN(val)) {
            val = "";
            alert("Zip only can take a number");
        }
        setZip(val)
    }

    return (
    <div>
        <div className="container justify-content-center">
            <div className="form-group">
                <label>Name</label>
                <input id='name'
                       type="text"
                       className="form-control"
                       maxLength="100"
                       onChange={changeName}
                       value={name}
                       placeholder="Example: 'My driveway' or 'Lot A'" />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input id='description'
                       type="text"
                       maxLength="500"
                       onChange={changeDesc}
                       value={desc}
                       className="form-control"
                       placeholder="Explain this location to people" />
            </div>

            <div className="form-group">
                <label>Address</label>
                <input id='address'
                       type="text"
                       maxLength="100"
                       onChange={changeAddress}
                       value={address}
                       className="form-control"
                       placeholder="Physical Address" />
            </div>

            <div className="form-group">
                <label>City</label>
                <input id='city'
                       type="text"
                       maxLength="5"
                       onChange={changeCity}
                       value={city}
                       className="form-control"
                       placeholder="" />
            </div>
            <div className="form-group">
                <label>State</label>
                <input id='state'
                       maxLength="3"
                       onChange={changeState}
                       value={state}
                       type="text"
                       className="form-control"
                       placeholder="" />
            </div>
            <div className="form-group">
                <label>Zip Code</label>
                <input id='zipcode'
                       onChange={changeZip}
                       value={zip}
                       type="number"
                       className="form-control"
                       placeholder="" />
            </div>
            <button type='button' onClick={handleSubmit} className="btn btn-primary btn-block">Create Location</button>

        </div>
    </div>
    )
}

export default AddLocation;
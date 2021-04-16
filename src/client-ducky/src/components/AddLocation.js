import React, {useState} from 'react';
import api from '../auth/api'

const AddLocation = () => {

    const [userId, setUserId] = useState("");

    const getHostID = () => {
        api.get(`users/me/`).then(res => {
            setUserId(res.data)
        })
    }

    const handleSubmit = (e) => {

    }


    return (
    <div>
        <div className="container justify-content-center">
            <div className="form-group">
                <label>Name</label>
                <input id='name' type="text" className="form-control"
                       placeholder="Example: 'My driveway' or 'Lot A'" />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input id='description'  type="text" className="form-control" placeholder="Explain this location to people" />
            </div>

            <div className="form-group">
                <label>Address</label>
                <input id='address'  type="text" className="form-control" placeholder="Physical Address" />
            </div>

            <div className="form-group">
                <label>City</label>
                <input id='city'  type="text" className="form-control" placeholder="" />
            </div>

            <div className="form-group">
                <label>Zip Code</label>
                <input id='zipcode' maxLength="5"  type="number" className="form-control" placeholder="" />
            </div>
            <div className="form-group">
                <label>State</label>
                <input id='state'  maxLength="2" type="text" className="form-control" placeholder="" />
            </div>
            <button type='button' onClick={handleSubmit} className="btn btn-primary btn-block">Create Location</button>

        </div>
    </div>
    )
}

export default AddLocation;
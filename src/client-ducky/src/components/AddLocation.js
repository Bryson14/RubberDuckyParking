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

    //     name = models.CharField(max_length=100)             # i.e. "My right driveway"
    // description = models.CharField(max_length=500)      # i.e. "the right side of a two car wide driveway
    // address = models.CharField(max_length=100)
    // city = models.CharField(max_length=50)
    // zip_code = models.CharField(max_length=10, default="20500")          # i.e. 84093-3541
    // state = models.CharField(max_length=3)
    // host = models.ForeignKey(Host, on_delete=models.CASCADE)
    <div>
        <div className="container narrow justify-content-center">
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
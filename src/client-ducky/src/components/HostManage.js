import React, {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom"
import AddParkingSpot from "./AddParkingSpot";
import ViewLocations from "./ViewLocations";
import ViewParkingSpots from "./ViewParkingSpots";
import AddLocationModal from './AddLocationModal'
import api from "../auth/api";

const HostManage = ({isAuthenticated}) => {

    const [isHost, setIsHost] = useState(false);

    const [showLocationModal, setShowLocationModal] = useState(false);

    const toggleLocationModal = () => {
        setShowLocationModal(!showLocationModal)
    }

    useEffect(() => {
        // api.get("users/me/")
        //     .then(r => {
        //         if(r.data) {
        //             setIsHost(r.data.host)
        //         } else {
        //             console.log("No data from server!")
        //         }
        //     }).catch(err => {
        //     console.log("Error getting details from server!")
        // })
    }, []);

    return (
        <>
            {/*TODO fix this. right now the api route isn't made to make host*/}
            {(isAuthenticated && {/*isHost*/}
                ?
                (<div className="container">
                    <div className="row m-3">
                        <div className="col-md-12 col-lg-6">
                            <h4 className="m-2">Your Current Locations</h4>
                            <ViewLocations />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h4 className="m-2">Your Current Parking Spots</h4>
                            <ViewParkingSpots />
                        </div>
                    </div>
                    <button className='btn btn-primary' onClick={toggleLocationModal}>Add Location</button>
                    <div className="row m-3">
                        <AddLocationModal toggleModal={toggleLocationModal} showModal={showLocationModal}/>
                        <div className="col-md-12 col-lg-6">
                            <h4 className="m-2">Add a Parking Spot</h4>
                            <AddParkingSpot />
                        </div>
                    </div>
                </div>) :
                (<Redirect to={"/login/"}/>))}
        </>
    )
}

export default HostManage;
import React, {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom"
// import AddParkingSpot from "./AddParkingSpot";
import ViewLocations from "./ViewLocations";
import ViewParkingSpots from "./ViewParkingSpots";
import AddLocationModal from './AddLocationModal'
import AddParkingSpotModal from './AddParkingSpotModal'
import api from "../auth/api";

const HostManage = ({isAuthenticated}) => {

    const [showLocationModal, setShowLocationModal] = useState(false);
    const [showSpotModal, setShowSpotModal] = useState(false);

    const toggleLocationModal = () => {
        setShowLocationModal(!showLocationModal)
    }
    const toggleSpotModal = () => {
        setShowSpotModal(!showSpotModal)
    }


    return (
        <>
            {(isAuthenticated
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
                    <div className='row m-3'>
                        <button className='btn btn-primary' onClick={toggleLocationModal}>Add Location</button>
                    </div>
                    <div className='row m-3'>
                        <button className='btn btn-primary' onClick={toggleSpotModal}>Add Parking Spot</button>
                    </div>
                    <div className="row m-3">
                        <AddLocationModal toggleModal={toggleLocationModal} showModal={showLocationModal}/>
                        <AddParkingSpotModal toggleModal={toggleSpotModal} showModal={showSpotModal}/>
                    </div>
                </div>) :
                (<Redirect to={"/login/"}/>))}
        </>
    )
}

export default HostManage;
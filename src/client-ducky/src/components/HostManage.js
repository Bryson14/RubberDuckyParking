import React, {useState} from 'react';
import {Redirect, useHistory} from "react-router-dom"
import AddLocation from "./AddLocation";
import AddParkingSpot from "./AddParkingSpot";
import ProfileReservationCard from "./ProfileReservationCard";
import ViewLocations from "./ViewLocations";
import ViewParkingSpots from "./ViewParkingSpots";

const HostManage = ({isAuthenticated}) => {

    return (
        <>
            {(isAuthenticated ?
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
                    <div className="row m-3">
                        <div className="col-md-12 col-lg-6">
                            <h4 className="m-2">Add a Location</h4>
                            <AddLocation />
                        </div>
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
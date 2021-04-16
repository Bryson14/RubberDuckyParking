import React, {useState} from 'react';
import {Redirect, useHistory} from "react-router-dom"
import AddLocation from "./AddLocation";
import AddParkingSpot from "./AddParkingSpot";
import ProfileReservationCard from "./ProfileReservationCard";

const HostManage = ({isAuthenticated}) => {

    return (
        <>
            {(isAuthenticated ?
                (<div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h4>Add a Location</h4>
                            <AddLocation />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h4>Add a Parking Spot</h4>
                            <AddParkingSpot />
                        </div>
                    </div>
                </div>) :
                (<Redirect to={"/login/"}/>))}
        </>
    )
}

export default HostManage;
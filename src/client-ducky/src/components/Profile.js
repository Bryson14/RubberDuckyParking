import React, {useEffect, useState} from "react"
import api from "../auth/api";
import {Redirect, useHistory} from "react-router-dom";
import ProfileReservationCard from "./ProfileReservationCard";

const Profile = ({isAuthenticated}) => {

    const [profileData, setProfileData] = useState({});
    const [personalRes, setPersonalRes] = useState([]);
    const [myRes, setMyRes] = useState([]);
    const [bossRes, setBossRes] = useState([]);
    const [isHost, setIsHost] = useState(false)
    const [isAttendant, setIsAttendant] = useState(false)

    const history = useHistory();

    useEffect(() => {
        api.get("users/me/")
            .then(r => {
                if(r.data) {
                    setProfileData(r.data.user)
                    setIsHost(r.data.host)
                    setIsAttendant(r.data.attendant)
                } else {
                    console.log("No data from server!")
                }
            }).catch(err => {
            console.log("Error getting details from server!")
        })
    }, [])

    useEffect(() => {
        api.get("reservations/")
            .then(r => {
                if(r.data) {
                    setPersonalRes(r.data)
                    console.log("Setting data")
                } else {
                    console.log("No data from server!")
                }
            }).catch(err => {
            console.log("Error getting details from server!")
        })
        if(isHost) {
            api.get("reservations/myreservations/")
                .then(r => {
                    if(r.data) {
                        setMyRes(r.data)
                        console.log("Setting data")
                    } else {
                        console.log("No data from server!")
                    }
                }).catch(err => {
                console.log("Error getting details from server!")
            })
        }
        if(isAttendant) {
            api.get("reservations/bossreservations/")
                .then(r => {
                    if(r.data) {
                        setBossRes(r.data)
                        console.log("Setting data")
                    } else {
                        console.log("No data from server!")
                    }
                }).catch(err => {
                console.log("Error getting details from server!")
            })
        }
    }, [isHost, isAttendant])

    const hostButton = (e) => {
        // TODO make this person a host in the database
        history.push("/managehost")
    }

    return (
        <>
            {(isAuthenticated ?
                (<div className="container">
                    <h3>Welcome, {profileData.first_name}!</h3>
                    <div className="row justify-content-center">
                        {isHost ? (
                            <div className="col-md-12 col-lg-6">
                                <a href="/managehost/"><h4>Host Dashboard</h4></a>
                            </div>
                        ): ''}

                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h4>My Reservations</h4>
                            {
                                personalRes.map((r) => {
                                    <ProfileReservationCard props={r} />
                                })
                            }
                        </div>
                        {isHost ? (
                            <div className="col-md-12 col-lg-6">
                                <h4>Reservations at My Location</h4>
                                {
                                    myRes.map((r) => {
                                        <ProfileReservationCard props={r} />
                                    })
                                }
                            </div>
                        ): ''}
                    </div>
                    <div className="row">
                        {isAttendant ? (
                            <div className="col-md-12 col-lg-6">
                                <h4>Boss's Reservations</h4>
                                {
                                    bossRes.map((r) => {
                                        <ProfileReservationCard props={r} />
                                    })
                                }
                            </div>
                        ): ''}

                    </div>
                    <hr/>
                    <div className="row justify-content-center">
                        {!isHost && !isAttendant ? (
                            <div className="col-md-12 col-lg-6">
                                <p>It seems that you are currently not a host. However, this is one of the easiest
                                decisions that you can make. Literally click on this button below, and the database
                                will turn you into a supercharged host with magical powers. You will gain the
                                ability to breath underwater, gather passive income off empty parking spots that you
                                have, and maybe even save up enough for a Bugatti. But like all things, we can
                                encourage you to do the right thing, but you must make this decision for yourself.</p>
                                <button onClick={hostButton} className="btn btn-primary btn-block">Become a Host!</button>
                            </div>
                        ): ''}

                    </div>

                </div>) :
                (<Redirect to={"/login/"}/>))}
        </>

    )
}

export default Profile;
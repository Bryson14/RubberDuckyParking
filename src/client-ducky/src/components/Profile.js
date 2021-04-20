import React, { useEffect, useState } from "react"
import api from "../auth/api";
import { Redirect, useHistory } from "react-router-dom";
import ProfileReservationCard from "./ProfileReservationCard";
import BecomeHostModal from './BecomeHostModal';
import BecomeAttendantModal from './BecomeAttendantModal';

const Profile = ({ isAuthenticated }) => {

    const [profileData, setProfileData] = useState({});
    const [personalRes, setPersonalRes] = useState([]);
    const [myRes, setMyRes] = useState([]);
    const [bossRes, setBossRes] = useState([]);
    const [isHost, setIsHost] = useState(false)
    const [isAttendant, setIsAttendant] = useState(false)

    const [displayHostModal, setDisplayHostModal] = useState(false)
    const [displayAttendantModal, setDisplayAttendantModal] = useState(false)

    const [showPersonalReservations, setShowPersonalReservations] = useState(false)
    const [showBossReservations, setShowBossReservations] = useState(false)
    const [showMyReservations, setShowMyReservations] = useState(false)

    const toggleShow = (type) => {
        if (type == 'personal') {
            setShowPersonalReservations(!showPersonalReservations)
        }
        if (type == 'my') {
            setShowMyReservations(!showMyReservations)
        }
        if (type == 'boss') {
            setShowBossReservations(!showBossReservations)
        }
    }

    // const history = useHistory();

    useEffect(() => {
        api.get("users/me/")
            .then(r => {
                if (r.data) {
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
                if (r.data) {
                    setPersonalRes(r.data)
                } else {
                    console.log("No data from server!")
                }
            }).catch(err => {
                console.log("Error getting details from server!")
            })
        if (isHost) {
            api.get("reservations/myreservations/")
                .then(r => {
                    if (r.data) {
                        setMyRes(r.data)
                    } else {
                        console.log("No data from server!")
                    }
                }).catch(err => {
                    console.log("Error getting details from server!")
                })
        }
        if (isAttendant) {
            api.get("reservations/bossreservations/")
                .then(r => {
                    if (r.data) {
                        setBossRes(r.data)
                    } else {
                        console.log("No data from server!")
                    }
                }).catch(err => {
                    console.log("Error getting details from server!")
                })
        }
    }, [isHost, isAttendant])

    const toggleHostModal = (e) => {
        setDisplayHostModal(!displayHostModal)
    }
    const toggleAttendantModal = (e) => {
        setDisplayAttendantModal(!displayAttendantModal)
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
                        ) : ''}

                    </div>
                    <div className="row">
                        <button className='btn btn-secondary' onClick={() => toggleShow('personal')}>{showPersonalReservations ? 'Hide ' : 'Show '} Personal Reservations</button>
                        {showPersonalReservations ? (
                            <div className="col-md-12 col-lg-6 reservations-wrapper">
                                <h4>My Reservations</h4>
                                {
                                    personalRes.map((r) => {
                                        return <ProfileReservationCard data={r} />
                                    })
                                }
                                {myRes.length === 0 ? 'No reservations, go make some!': ''}
                            </div>
                        ) : ''}
                        {isHost ? (
                            <div className='mt-3'>
                                <button className='btn btn-secondary' onClick={() => toggleShow('my')}>{showMyReservations ? 'Hide ' : 'Show '} My Reservations</button>
                                {showMyReservations ? (
                                    <div className="col-md-12 col-lg-6">
                                        <h4>Reservations at My Location</h4>
                                        {
                                            myRes.map((r) => {
                                                return <ProfileReservationCard customer={r.user} data={r} />
                                            })
                                        }
                                    </div>

                                ) : ''}
                            </div>
                        ) : ''}
                    </div>
                    <div>
                        {isAttendant ? (
                            <div className='mt-3 row'>
                                <button className='btn btn-secondary' onClick={() => toggleShow('boss')}>{showBossReservations ? 'Hide ' : 'Show '} My Boss's Reservations</button>
                                {showBossReservations ? (
                                    <div className="col-md-12 col-lg-6 reservations-wrapper">
                                        <h4>Boss's Reservations</h4>
                                        {
                                            bossRes.map((r) => {
                                                return <ProfileReservationCard customer={r.user} data={r} />
                                            })
                                        }
                                        {bossRes.length === 0 ? 'your boss has no reservations': ''}
                                    </div>

                                ): ""}
                            </div>
                        ) : ''}

                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        {!isHost && !isAttendant ? (
                            <div>
                                <button onClick={toggleHostModal} className='btn btn-primary'>Become a Host</button>
                                <BecomeHostModal showModal={displayHostModal} toggleModal={toggleHostModal} />
                                <button onClick={toggleAttendantModal} className='btn btn-primary'>Become a Attendant</button>
                                <BecomeAttendantModal showModal={displayAttendantModal} toggleModal={toggleAttendantModal} />
                            </div>
                        ) : ''}

                    </div>

                </div>) :
                (<Redirect to={"/login/"} />))}
        </>

    )
}

export default Profile;
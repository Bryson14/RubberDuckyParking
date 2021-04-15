import React, {useEffect, useState} from "react"
import api from "../auth/api";
import {Redirect} from "react-router-dom";
import ProfileReservationCard from "./ProfileReservationCard";

const fake = {
    "pk": 1,
    "username": "admin",
    "email": "admin@admin.com",
    "first_name": "Bryson",
    "last_name": "Meiling",
    "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
}

const fakeReservations = [
    {
        "pk": 1,
        "parking_spot": {
            "pk": 2,
            "uid": 2,
            "parking_size": {
                "pk": 1,
                "name": "Standard",
                "description": "standard",
                "min_width": 8.5,
                "min_length": 18.0
            },
            "price": 5.0,
            "location": {
                "pk": 1,
                "name": "this cool spot at aggie village",
                "description": "super close to maverick stadium",
                "address": "123 aggie blvd",
                "city": "logan",
                "zip_code": "84321",
                "state": "UT",
                "host": {
                    "pk": 1,
                    "user": {
                        "pk": 1,
                        "username": "admin",
                        "email": "admin@admin.com",
                        "first_name": "Bryson",
                        "last_name": "Meiling",
                        "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
                    }
                }
            },
            "notes": "right side of parking lot",
            "actual_width": 9.0,
            "actual_length": 18.0,
            "owner": {
                "pk": 1,
                "user": {
                    "pk": 1,
                    "username": "admin",
                    "email": "admin@admin.com",
                    "first_name": "Bryson",
                    "last_name": "Meiling",
                    "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
                }
            }
        },
        "start_date": "2021-04-10T17:29:25.212000-06:00",
        "end_date": "2021-04-20T17:29:25.212000-06:00",
        "user": {
            "pk": 1,
            "username": "admin",
            "email": "admin@admin.com",
            "first_name": "Bryson",
            "last_name": "Meiling",
            "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
        },
        "canceled": false,
        "confirmed": false
    },
    {
        "pk": 2,
        "parking_spot": {
            "pk": 2,
            "uid": 2,
            "parking_size": {
                "pk": 1,
                "name": "Standard",
                "description": "standard",
                "min_width": 8.5,
                "min_length": 18.0
            },
            "price": 5.0,
            "location": {
                "pk": 1,
                "name": "this cool spot at aggie village",
                "description": "super close to maverick stadium",
                "address": "123 aggie blvd",
                "city": "logan",
                "zip_code": "84321",
                "state": "UT",
                "host": {
                    "pk": 1,
                    "user": {
                        "pk": 1,
                        "username": "admin",
                        "email": "admin@admin.com",
                        "first_name": "Bryson",
                        "last_name": "Meiling",
                        "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
                    }
                }
            },
            "notes": "right side of parking lot",
            "actual_width": 9.0,
            "actual_length": 18.0,
            "owner": {
                "pk": 1,
                "user": {
                    "pk": 1,
                    "username": "admin",
                    "email": "admin@admin.com",
                    "first_name": "Bryson",
                    "last_name": "Meiling",
                    "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
                }
            }
        },
        "start_date": "2021-04-10T17:29:25.212000-06:00",
        "end_date": "2021-04-20T17:29:25.212000-06:00",
        "user": {
            "pk": 1,
            "username": "admin",
            "email": "admin@admin.com",
            "first_name": "Bryson",
            "last_name": "Meiling",
            "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
        },
        "canceled": false,
        "confirmed": false
    },
    {
        "pk": 3,
        "parking_spot": {
            "pk": 5,
            "uid": 1,
            "parking_size": {
                "pk": 1,
                "name": "Standard",
                "description": "standard",
                "min_width": 8.5,
                "min_length": 18.0
            },
            "price": 13.35,
            "location": {
                "pk": 1,
                "name": "this cool spot at aggie village",
                "description": "super close to maverick stadium",
                "address": "123 aggie blvd",
                "city": "logan",
                "zip_code": "84321",
                "state": "UT",
                "host": {
                    "pk": 1,
                    "user": {
                        "pk": 1,
                        "username": "admin",
                        "email": "admin@admin.com",
                        "first_name": "Bryson",
                        "last_name": "Meiling",
                        "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
                    }
                }
            },
            "notes": "this better work",
            "actual_width": 9.0,
            "actual_length": 18.0,
            "owner": {
                "pk": 1,
                "user": {
                    "pk": 1,
                    "username": "admin",
                    "email": "admin@admin.com",
                    "first_name": "Bryson",
                    "last_name": "Meiling",
                    "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
                }
            }
        },
        "start_date": "2021-04-10T17:29:25.212000-06:00",
        "end_date": "2021-04-20T17:29:25.212000-06:00",
        "user": {
            "pk": 1,
            "username": "admin",
            "email": "admin@admin.com",
            "first_name": "Bryson",
            "last_name": "Meiling",
            "password": "pbkdf2_sha256$216000$SuZRq5XkwbAG$PPuLajAXQn56OqwHXzdauuqzCLv00YzNDd8Bawqm8/o="
        },
        "canceled": false,
        "confirmed": false
    }
]

const Profile = ({isAuthenticated}) => {

    const [profileData, setProfileData] = useState(fake);
    const [personalRes, setPersonalRes] = useState(fakeReservations);
    const [myRes, setMyRes] = useState([]);
    const [bossRes, setBossRes] = useState([]);

    useEffect(() => {
        api.get("users/me/")
            .then(r => {
                if(r.data) {
                    setProfileData(r.data)
                    console.log("Setting data")
                } else {
                    console.log("No data from server!")
                }
            }).catch(err => {
            console.log("Error getting details from server!")
        })

        // personal reservations
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

        // personal reservations
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

        // personal reservations
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
    })

    return (
        <>
            {(isAuthenticated ?
                (<div className="container">
                    <h3>Welcome, {profileData.first_name}!</h3>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h4>My Reservations</h4>
                            {
                                personalRes.map((r) => {
                                    debugger;
                                    <ProfileReservationCard props={r} />
                                })
                            }
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h4>Reservations at My Location</h4>
                            {
                                myRes.map((r) => {
                                    <ProfileReservationCard props={r} />
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h4>Boss's Reservations</h4>
                            {
                                bossRes.map((r) => {
                                    <ProfileReservationCard props={r} />
                                })
                            }
                        </div>
                    </div>

                </div>) :
                (<Redirect to={"/login/"}/>))}
        </>

    )
}

export default Profile;
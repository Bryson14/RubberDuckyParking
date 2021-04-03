import React, {useEffect, useState} from "react"

const staticData = {
    'username': 'Bryson',
    'gmail': "gmail",
}

const Profile = ({isAuthenticated, token}) => {

    useEffect(() => {

    })

    function authenticate () {
        return isAuthenticated;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>This is where we can change stuff about the user, they can see their different listings, upcoming
            rentals, and different tools in the dashboard. If they are a host or attendant, they will see
            more things here than a regular baseuser</p>
            {(authenticate() ?
                (<p>Logged In</p>) :
                (<p>NOT Logged In</p>))}
        </div>

    )
}

export default Profile;
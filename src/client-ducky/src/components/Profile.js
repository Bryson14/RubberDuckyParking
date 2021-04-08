import React, {useEffect, useState} from "react"

const staticData = {
    firstName: 'Bryson',
    lastName: 'Name',
    username: 'admin',
    gmail: 'bry@gmail.com',
}

const Profile = ({isAuthenticated, token}) => {

    return (
        <div>
            <h1>Profile</h1>
            <p>This is where we can change stuff about the user, they can see their different listings, upcoming
            rentals, and different tools in the dashboard. If they are a host or attendant, they will see
            more things here than a regular baseuser</p>
            {(isAuthenticated) ?
                (
                    <h2>Welcome {staticData.username}!</h2>

                ):(
                    <p>NOT Logged In</p>
                )}
        </div>

    )
}

export default Profile;
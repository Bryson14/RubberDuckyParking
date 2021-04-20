import React, {useState, useEffect} from 'react';
import {Redirect, useHistory} from "react-router-dom"
import api from "../auth/api";

const AttendantManage = ({isAuthenticated}) => {

    const [reservations, setReservations] = useState([])

    const history = useHistory()

    useEffect(() => {
        api.get('/reservations/needsconfirmation/').then(res => {
            if(res.status === 200) {
                setReservations(res.data)
            }
        })
    }, [])

    const confirmReservation = (pk) => {
        api.post(`reservations/${pk}/confirm/`).then(res => {
            if(res.status === 200) {
                window.location.reload()
            }
        })
    }


    const renderRows = () => {
        return reservations.map(r => {
            console.log(r)
            let start_date = new Date(r.start_date)
            let end_date = new Date(r.end_date)
            return (
                <tr key={r.pk}>
                    <td>
                        {r.pk}
                    </td>
                    <td>
                        {r.user.first_name} {r.user.last_name}
                    </td>
                    <td>
                        {r.parking_spot.parking_size.name}
                    </td>
                    <td>
                        {r.parking_spot.location.name}
                    </td>
                    <td>
                        {start_date.toDateString()}-{start_date.getHours()}:{start_date.getMinutes()}
                    </td>
                    <td>
                        {end_date.toDateString()}-{end_date.getHours()}:{end_date.getMinutes()}
                    </td>
                    <td>
                        <button onClick={() => confirmReservation(r.pk)}>Confirm</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
            {(isAuthenticated
                ?
                (<div className="container">
                    <table className='table'>
                        <thead>
                        <tr>
                        <th>pk</th>
                        <th>Customer</th>
                        <th>Size</th>
                        <th>Location</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                </div>) :
                (<Redirect to={"/login/"}/>))}
        </>
    )
}

export default AttendantManage;
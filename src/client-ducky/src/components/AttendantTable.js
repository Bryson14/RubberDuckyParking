

import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom"
import CancelReservationModal from "./CancelReservationModal"
import FireAttendantModal from './FireAttendantModal';
import api from "../auth/api";

const AttendantTable = () => {

    const [currentRes, setCurrentRes] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [attendants, setAttendants] = useState([])
    const [currentAttendant, setCurrentAttendant] = useState(null)

    const history = useHistory()

    useEffect(() => {
        api.get('/attendants/myattendants/').then(res => {
            if(res.status === 200) {
                setAttendants(res.data)
            } else {
                alert('failed fetching attendants')
            }
        })
    }, [])

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const fireAttendant = (pk) => {
        setCurrentAttendant(pk)
        toggleModal()
    }

    const renderRows = () => {
        return attendants.map(a => {
            console.log(a)
            return (
                <tr key={a.pk}>
                    <td>
                        {a.pk}
                    </td>
                    <td>
                        {a.user.first_name} {a.user.last_name}
                    </td>
                    <td>
                        <button onClick={() => fireAttendant(a.pk)}>Fire</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
            {attendants.length === 0 ? (
                <div className='container'>
                    you do not have any attendants...
                </div>
            ) :
                <div className="container">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>pk</th>
                                <th>User</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                </div>
            }
            <FireAttendantModal showModal={showModal} toggleModal={toggleModal} pk={currentAttendant}/>
        </>
    )
}

export default AttendantTable;
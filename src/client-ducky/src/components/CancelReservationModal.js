import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import api from '../auth/api'
import "../css/styles.css"

const CancelReservationModal = ({reservation, showModal, toggleModal}) => {

    const history = useHistory();
    const cancelReservation = () => {
        api.post(`/reservations/${reservation?.pk}/cancel/`).then(res => {
            if(res.status === 200) {
                window.location.reload()
            }
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <div className={showModal? "modal-wrap" : "hide"}>
            <div className="modal-content">
                <div className="modal-message">
                    Are you sure you would like to cancel this reservation? 
                    <p>reservation number: {reservation?.pk}</p>
                </div>
                <div className='modal-actions'>
                    <button onClick={cancelReservation} type='button' className="btn btn-primary btn-block">Yes</button>
                    <button onClick={toggleModal} type='button' className="btn btn-primary btn-block">No</button>
                </div>
            </div>
        </div>
    )
}

export default CancelReservationModal;
import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import api from '../auth/api'
import "../css/styles.css"

const FireAttendantModal = ({pk, showModal, toggleModal, redirect=null}) => {

    const history = useHistory();
    const fireAttendant = () => {
        api.post(`/hosts/${pk}/fire/`).then(res => {
            if(res.status === 200) {
                if(redirect){
                    history.push(redirect)
                }
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
                    Are you sure you would like to fire this attendant? 
                    <p>attendant number: {pk}</p>
                </div>
                <div className='modal-actions'>
                    <button onClick={fireAttendant} type='button' className="btn btn-primary btn-block">Yes</button>
                    <button onClick={toggleModal} type='button' className="btn btn-primary btn-block">No</button>
                </div>
            </div>
        </div>
    )
}

export default FireAttendantModal;
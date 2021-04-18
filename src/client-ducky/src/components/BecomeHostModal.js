import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import api from '../auth/api'
import "../css/styles.css"

const BecomeHostModal = ({user, showModal, toggleModal}) => {
    const history = useHistory();
    const becomeHost = () => {
        // api.post
        console.log('become host')
        history.push('/managehost')
    }

    return (
        <div className={showModal? "modal-wrap" : "hide"}>
            <div className="modal-content">
                <div className="modal-message">
                    Are you sure you would like to become a host? 
                </div>
                <div className='modal-actions'>
                    <button onClick={becomeHost} type='button' className="btn btn-primary btn-block">Yes</button>
                    <button onClick={toggleModal} type='button' className="btn btn-primary btn-block">No</button>
                </div>
            </div>
        </div>
    )
}

export default BecomeHostModal;
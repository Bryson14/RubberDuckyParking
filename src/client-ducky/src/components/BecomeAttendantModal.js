import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import api from '../auth/api'
import "../css/styles.css"

const BecomeAttendantModal = ({user, showModal, toggleModal}) => {
    const history = useHistory();

    const [boss, setBoss] = useState(null)
    const [hosts, setHosts] = useState([])

    useEffect(() => {
        api.get('hosts/')
            .then(r => {
                setHosts(r.data)
            })
    }, [])

    const becomeAttendant = () => {
        if(boss !== null) {
            api.post('/attendants/', {
                host_pk: boss 
            }).then(res => {
                console.log(res)
                history.push('/profile')
            }).catch(error => {
                alert(error)
            })
        }
    }

    const handleBossChange = (e) => {
        setBoss(e.target.value)
    }

    return (
        <div className={showModal? "modal-wrap" : "hide"}>
            <div className="modal-content">
                <div className="modal-message">
                    Choose your host!
                </div>
                <select className='m-3 custom-select' onChange={handleBossChange}>
                    <option value={null}>----------------</option>
                    {hosts.map(host => {
                        return <option key={host.pk} value={host.pk}>{host?.user?.first_name} {host?.user?.last_name}</option>
                    })}
                </select>

                <div className='modal-actions'>
                    <button onClick={becomeAttendant} type='button' className="btn btn-primary btn-block">Become an Attendant</button>
                    <button onClick={toggleModal} type='button' className="btn btn-primary btn-block">No</button>
                </div>
            </div>
        </div>
    )
}

export default BecomeAttendantModal;
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'

const ProfileReservationCard = ({data, customer}) => {
    const history = useHistory();

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        let start = new Date(data.start_date)
        let end = new Date(data.end_date)
        setStartDate(start)
        setEndDate(end)
    }, [])

    const handleClicked = () => {
        history.push(`reservation/${data.pk}`)
    }

    return (
        <div className="container parking-card" onClick={handleClicked}>
            {customer ? (
                <div>
                    <h2>Reserved By: { customer.first_name} { customer.last_name}
                    </h2>
                </div>
            ): ''}
            <div className="jumbotron">
                <h2>{data.parking_spot.location.name}</h2>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <p><b>Start Time:</b> {startDate?.toDateString()}-{startDate?.getHours()}:{startDate?.getMinutes()}</p>
                        <p><b>End Time:</b> {endDate?.toDateString()}-{endDate?.getHours()}:{endDate?.getMinutes()}</p>
                        <p><b>Statu:s</b> {!data.confirmed ? 'Awaiting Confirmation' : 'Confirmed'}</p>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={"QRCODE.png"} alt={"QRCODE"}/>
                    </div>
                </div>


            </div>
            <div>
                <p><b>Cost:</b> $ {data.parking_spot.price} / hr</p>
                <p><b>Description:</b> {data.parking_spot.location.description}</p>
                <p><b>Address:</b> <i>{data.parking_spot.location.address}, {data.parking_spot.location.city}</i></p>
                <p><b>Notes:</b> {data.parking_spot.notes}</p>
                <p><b>Actual Width:</b> {data.parking_spot.actual_width}ft  <b>Actual Length: {data.parking_spot.actual_length}ft</b></p>
            </div>
            <div className="text-right">
                <p><b><i>This spot is hosted by {data.parking_spot.owner.user.first_name}</i></b></p>
            </div>
        </div>
    )
}

export default ProfileReservationCard;
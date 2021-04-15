import React, {useState, useEffect} from 'react';
import api from '../auth/api'


const Reservation = ({id, isAuthenticated, token}) => {

    const [resData, setResData] = useState("");

    useEffect(() => {
        let paths = window.location.pathname.split("/");
        let l = paths.length;
        api.get(`reservations/${paths[l-1]}/`)
            .then(res => {
                if(res.data) {
                    setResData(res.data)
                    console.log("Setting data")
                } else {
                    console.log("No data from server!")
                }
            }).catch(err => {
            console.log("Error getting details from server!")
        })
    })

    function showData() {
        return (
            <div className="container parking-card">
                <div className="jumbotron">
                    <h2>{resData.parking_spot.location.name}</h2>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <p><b>Start Time:</b> $ {resData.start_date}</p>
                            <p><b>End Time:</b> $ {resData.end_date}</p>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <img src={"QRCODE.png"} alt={"QRCODE"}/>
                        </div>
                    </div>


                </div>
                <div>
                    <p><b>Cost:</b> $ {resData.parking_spot.price} / hr</p>
                    <p><b>Description:</b> {resData.parking_spot.location.description}</p>
                    <p><b>Address:</b> <i>{resData.parking_spot.location.address}, {resData.parking_spot.location.city}</i></p>
                    <p><b>Notes:</b> {resData.parking_spot.notes}</p>
                    <p><b>Actual Width:</b> {resData.parking_spot.actual_width}ft  <b>Actual Length: {resData.parking_spot.actual_length}ft</b></p>
                </div>
                <div className="text-right">
                    <p><b><i>This spot is hosted by {resData.parking_spot.owner.user.first_name}</i></b></p>
                </div>
            </div>
        )
    }

    function errorMessage() {
        return (
            <div className="container">
                <h3 className="p-5 m-5">Whoops! No Data Found );</h3>
                <p>Please try searching for something different</p>
            </div>
        )
    }

    return (
        (resData?
        showData():
        errorMessage())
    )


}

export default Reservation;
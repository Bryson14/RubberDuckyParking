import React, {useState, useEffect} from 'react';
import api from '../auth/api'


const ReservationData = {
    123: {
        renterName: "Bryson Meiling",
        renterID: 6481,
        hostName: "Jazmin Bybee",
        hostID: 8491,
        purchaseDateTime: "2020-03-28T12:35:02:123654",
        reservationDateTime : "2021-03-29T32:12:00",
        rate: 12.0,
        duration: 3.5,
        amount: 42.00,
        spotId: 946,
        carID: 321564,
        carInfo: {
            year: 2014,
            make: "Nissan",
            model: "Sentra",
            color: "Blue",
            licenseNo: "f483es"
        }
    }
}

const Reservation = ({id, isAuthenticated, token}) => {

    const [resData, setResData] = useState("");

    useEffect(() => {
        debugger;
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
                    <h2>{resData.location.name}</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <p><b>Start Time:</b> $ {resData.start_date} / hr</p>
                            <p><b>End Time:</b> $ {resData.end_date} / hr</p>
                        </div>
                        <div className="col-md-12">
                            <img src={"QRCODE.png"} alt={"QRCODE"}/>
                        </div>
                    </div>


                </div>
                <div>
                    <p><b>Cost:</b> $ {resData.price} / hr</p>
                    <p><b>Description:</b> {resData.location.description}</p>
                    <p><b>Address:</b> <i>{resData.location.address}, {resData.location.city}</i></p>
                    <p><b>Notes:</b> {resData.notes}</p>
                    <p><b>Actual Width:</b> {resData.actual_width}ft  <b>Actual Length: {resData.actual_length}ft</b></p>
                </div>
                <div className="text-right">
                    <p><b><i>This spot is hosted by {resData.owner.user.first_name}</i></b></p>
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
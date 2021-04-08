import React, {useState, useEffect} from 'react';
import api from '../auth/api'

const ReservationData = {
    123: {
        renterName: "Bryson Meiling",
        renterID: 6481,
        hostName: "Jazmin Bybee",
        hostID: 8491,
        purchaseDateTime: "2021-04-05T21:53:03.196Z",
        reservationDateTime : "2021-05-07T21:53:03.196Z",
        rate: 12.0,
        duration: 210,
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

    const [resData, setResData] = useState({});
    const [resID, setResID] = useState(id);
    const [qrCode, setQrCode] = useState({});
    const [resTime, setResTime] = useState({});
    const [endTime, setEndTime] = useState({});
    const [purchaseTime, setPurchaseTime] = useState({});


    useEffect(() => {
        if (Object.keys(resData).length === 0) {
            let path = window.location.pathname
            path = path.split("/");
            console.log("pathname : ",path[path.length - 1]);
            if (path[path.length - 2] === "reservation") {
                let idx = Number(path[path.length - 1]);
                setResID(idx);
                debugger;
                api.get(`reservation/?id=${idx}`)
                    .then(res => {
                        // TODO backend not returning data
                        if(res.data.length > 0) {
                            console.log("res data", res.data);
                            setResData(res.data);
                            setTime(res.data, idx);
                        } else {
                            console.log("No data from server!");
                            alert("Fake static data set instead of server!");
                            setResData(ReservationData[idx]);
                            setTime(ReservationData, idx);
                        }
                    }).catch( () => {
                    console.log("Error fetching data for the search page!")
                    alert("Error fetching data, setting fake data");
                    debugger;
                    setResData(ReservationData[idx]);
                    setTime(ReservationData, idx);
                })
            }
        }
    }, [resData, resTime, endTime, purchaseTime])

    function setTime (data, idx) {

        let res = new Date(data[idx].reservationDateTime);
        setResTime(res.toLocaleString());

        let purchase = new Date(data[idx].purchaseDateTime);
        setPurchaseTime(purchase.toLocaleString());

        let addMin = Number(data[idx].duration);
        res.setMinutes(res.getMinutes() + addMin);

        setEndTime(res.toLocaleString())

        // setQrCode(data); TODO make a api call to /api/qrcode/?data=someURL
    }

    function showData() {
        return (
            <div className="container parking-card">
                <h2>Reservation Detail</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <img src={qrCode} alt="Confirmation QR Code"/>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <ul>
                            <li>Name - {resData.renterName}</li>
                            <li>Host Name - {resData.hostName}</li>
                            <li>Reservation Time - {resTime}</li>
                            <li>End Time - {endTime}</li>
                            <li>* Car Details *</li>
                            <ul>
                                <li>Year - {resData.carInfo.year}</li>
                                <li>Make - {resData.carInfo.make}</li>
                                <li>Model - {resData.carInfo.model}</li>
                                <li>Color - {resData.carInfo.color}</li>
                                <li>License Plate - {resData.carInfo.licenseNo}</li>
                            </ul>
                            <li>Spot ID - {resData.spotId}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    function errorMessage() {
        return (
            <div className="container">
                <h3 className="p-5 m-5">Whoops! No Data Found );</h3>
                <p>Please try searching for something different and/or logging in.</p>
            </div>
        )
    }

    return (
        <div>
            {resData && Object.keys(resData).length !== 0 ? showData() : errorMessage() }
        </div>
    );


}

export default Reservation;
import React, {useState, useEffect} from 'react';

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

const Reservation = ({id}) => {

    const [resData, setResData] = useState({});
    const [resID, setResID] = useState(id);
    const [qrCode, setQrCode] = useState({});

    useEffect(() => {
        if (Object.keys(resData).length === 0) {
            let path = window.location.pathname
            path = path.split("/");
            console.log("pathname : ",path[path.length - 1]);
            if (path[path.length - 2] === "reservation") {
                let idx = Number(path[path.length - 1]);
                setResID(idx);
                console.log("res data", ReservationData[resID]);
                setResData(ReservationData[resID]);
                // setQrCode(data);
            }
        }
    })

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
                            <li>Reservation Time - {resData.reservationDateTime}</li>
                            <li>End Time - {resData.reservationDateTime + resData.duration}</li>
                            <li>* Car Details *</li>
                            <ul>
                                <li>Year - {resData.carInfo.year}</li>
                                <li>Make - {resData.carInfo.make}</li>
                                <li>Model - {resData.carInfo.model}</li>
                                <li>Color - {resData.carInfo.color}</li>
                                <li>License Plate - {resData.carInfo.licenseNo}</li>
                            </ul>
                            <li>Spot ID - {resData.spotID}</li>
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
                <p>Please try searching for something different</p>
            </div>
        )
    }

    return (
        <div>
            {Object.keys(resData).length !== 0 ? showData() : errorMessage() }
        </div>
    );


}

export default Reservation;
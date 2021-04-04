import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom'

const ParkingCard = ({id, location, size, price}) => {

    const [heartFile, setHeartFile] = useState("../public/black_heart.svg");
    const [heartText, setHeartText] = useState("Not Liked");

    const redHeart = "../public/red_heart.svg";
    const blackHeart = "../public/black_heart.svg";
    const notLiked = "Not Liked";
    const liked = "Liked Spot!";

    const history = useHistory()

    const handleButton = () => {
        console.log("button pushed: ParkingcArd");
        let route = `/details/${id}`;
        history.push(route);
    }

    function heartClicked() {
        setHeartFile(heartFile === blackHeart ? redHeart : blackHeart);
        setHeartText(heartText === notLiked? liked : notLiked);
        // const fs = require("fs");
        // fs.readFile(heartFile, (err, data) => {
        //     if (err) {
        //         console.log("Error reading");
        //         throw err};
        //
        //     console.log(data.toString())
        // })
        console.log(`The heart file is now ${heartFile}`);
    }

    return (
        <div className="text-left container parking-card m-3">
            <div className="row">
                <div className="col-10">
                    {size ? (
                        <div>
                            {size.name}
                        </div>
                    ): ''}
                </div>
                <div className="col-2" onClick={heartClicked}>
                    {/*<object type="image/svg+xml" data={heartFile} >{heartText}</object>*/}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    {location ? (
                        <div>
                            <div>
                                {location.name}
                            </div>
                            <div>
                                {location.address}
                            </div>
                            <div>
                                {location.city}
                            </div>
                            <div>
                                {location.description}
                            </div>
                        </div>
                    ): ''}
                </div>
                <div className="col-lg-2 col-sm-6">
                    <p><b>$ {price} / hr</b></p>
                </div>
                <div className="col-lg-2 col-sm-6 ">
                    <button onClick={handleButton}>details</button>
                </div>
            </div>
        </div>
    )
}

export default ParkingCard;
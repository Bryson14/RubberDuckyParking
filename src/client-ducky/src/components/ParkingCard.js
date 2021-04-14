import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom'

const ParkingCard = ({id, location, size, price, notes}) => {

    const [heartFile, setHeartFile] = useState("black_heart.svg");
    const [heartText, setHeartText] = useState("Not Liked");

    const redHeart = "red_heart.svg";
    const blackHeart = "black_heart.svg";
    const notLiked = "Not Liked";
    const liked = "Liked Spot!";

    const history = useHistory()

    const handleButton = () => {
        let route = `/details/${id}`;
        history.push(route);
    }

    function heartClicked() {
        setHeartFile(heartFile === blackHeart ? redHeart : blackHeart);
        setHeartText(heartText === notLiked? liked : notLiked);
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
                    <img src={heartFile} alt={heartText} width={35} height={35}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-sm-12 text-justify">
                    {location ? (
                        <div>
                            <div>
                                <h3>{location.name}</h3>
                            </div>
                            <div>
                                <i>{`${location.address} ${location.city}`}</i>
                            </div>
                            <div>
                                {notes}
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
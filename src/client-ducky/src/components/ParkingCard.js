import {useState} from 'react';

const ParkingCard = ({id ,title, spot_type, information, price, img_src}) => {

    const [heartFile, setHeartFile] = useState("../public/black_heart.svg");
    const [heartText, setHeartText] = useState("Not Liked");

    const redHeart = "../public/red_heart.svg";
    const blackHeart = "../public/black_heart.svg";
    const notLiked = "Not Liked";
    const liked = "Liked Spot!";

    function heartClicked() {
        setHeartFile(heartFile === blackHeart ? redHeart : blackHeart);
        setHeartText(heartText === notLiked? liked : notLiked);
        console.log(`The heart file is now ${heartFile}`);
    }

    return (
        <div className="text-left container parking-card m-3">
            <div className="row">
                <div className="col-10">
                    <p className=""><i>{spot_type}</i></p>
                </div>
                <div className="col-2" onClick={heartClicked}>
                    <img src={heartFile} alt={heartText}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h3 className="">{title}</h3>
                    <p className="">{information}</p>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <p><b>$ {price} / hr</b></p>
                </div>
                <div className="col-lg-2 col-sm-6 ">
                    <a href={`/details/${id}`}><button>details</button></a>
                </div>
            </div>
        </div>
    )
}

export default ParkingCard;
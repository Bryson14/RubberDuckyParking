const DetailCard = ({id ,title, spot_type, actual_width, actual_height, information, price, img_src}) => {

    function rentClicked () {
        console.log("the rent button is clicked");
    }

    return (
        <div className="text-left container parking-card m-3">
            <div className="row">
                <div className="col-10">
                    <p className=""><i>{spot_type}</i></p>
                </div>
                <div className="col-2">
                    <img className="m-2" src="../../public/red_heart.svg" alt=""/>
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
                    <button onClick={rentClicked}>RENT ME!</button>
                </div>
            </div>


        </div>
    )
}

export default DetailCard;
const ParkingCard = ({id ,title, spot_type, information, price, img_src}) => {

    return (
        <div className="text-left container parking-card m-3">
            <div className="row">
                <div className="col-12">
                    <p className=""><i>{spot_type}</i></p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 col-sm-12">
                    <h3 className="">{title}</h3>
                    <p className="">{information}</p>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <p><b>$ {price} / hr</b></p>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <a href={`/details/${id}`}><button>details</button></a>
                </div>
            </div>


        </div>
    )
}

export default ParkingCard;
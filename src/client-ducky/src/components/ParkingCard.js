const ParkingCard = ({title, spot_type, information, img_src}) => {

    return (
        <div>
            <h3 className="parkingSpot__category">{spot_type}</h3>
            <h2 className="parkingSpot__title">{title}</h2>
            <p className="parkingSpot__excerpt">{information}</p>
            <a href="/details"><button>details</button></a>
            <img src={img_src}/>
        </div>
    )
}

export default ParkingCard;
const ParkingSpotCard = ({spot}) => {

    return (
        <div className="location-card">
            <ul>
                <li>Size: {spot?.parking_size?.name}</li>
                <li>Price: {spot?.price}</li>
                <li>Location: {spot?.location?.name}</li>
            </ul>
        </div>
    )

}

export default ParkingSpotCard

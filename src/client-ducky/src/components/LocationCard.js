const LocationCard = ({location}) => {

    // location.name, description, address, city, zip, state

    return (
        <div className="location-card">
            <ul>
                <li>{location?.name}</li>
                <li>{location?.description}</li>
                <li>{location?.address}</li>
                <li>{location?.city}</li>
                <li>{location?.zip_code}</li>
                <li>{location?.state}</li>
            </ul>
        </div>
    )

}

export default LocationCard

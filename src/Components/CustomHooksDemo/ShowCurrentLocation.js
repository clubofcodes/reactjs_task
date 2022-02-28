import useGeoLocation from "../../Hooks/useGeoLocation"

export default function ShowCurrentLocation() {
    //Defining the custom hook to fetch current system browser's location.
    const currentLocation = useGeoLocation();
    return (
        <div>
            <p className='topic-heading'>={'>'} Show's browser Current Location Coordinates using GeoLocation API</p>
            {/* Shows Error if user denies location permission */}
            {(currentLocation.error) ? <div className="div-flex"><p className="rectanglebg">{currentLocation.error}</p></div> :
                //Shows latitude and longitude after successfully loading the location data.
                (currentLocation.loaded) ? <div className="div-flex"><p className="rectanglebg">Latitude: {currentLocation.coordinates.showLatitude} {' & '} Longitude: {currentLocation.coordinates.showLongitude} </p></div> : <h2>Fetching Location...</h2>}
        </div>
    )
}

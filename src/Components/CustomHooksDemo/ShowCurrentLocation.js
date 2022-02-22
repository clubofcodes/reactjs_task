import useGeoLocation from "../../Hooks/useGeoLocation"

export default function ShowCurrentLocation() {
    //Defining the custom hook to fetch current location.
    const currentLocation = useGeoLocation();
    return (
        <div>
            <p className='topic-heading'>={'>'} Show's Current Location Coordinates using GeoLocation Hook</p>
            {/* Shows Error if user denies location permission */}
            {(currentLocation.error) ? <h2 className="innertag-flex"><p className="rectanglebg">{currentLocation.error}</p></h2> :
                //Shows latitude and longitude after successfully loading the location data.
                (currentLocation.loaded) ? <h2 className="innertag-flex"><p className="rectanglebg">Latitude: {currentLocation.coordinates.showLatitude} {' & '} Longitude: {currentLocation.coordinates.showLongitude} </p></h2> : <h2>Fetching Location...</h2>}
        </div>
    )
}

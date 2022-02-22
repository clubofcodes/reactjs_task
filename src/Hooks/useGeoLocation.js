import { useEffect, useState } from "react";
/**
 * @returns currentLoaction of system with Coordinates or error if any, on button click of parent component.
 */
export default function useGeoLocation() {
    //Declared variables for storing the is data loaded, coordinates or error thrown by geolocation.
    const [currentLocation, setCurrentLocation] = useState({ loaded: false, coordinates: { showLatitude: '', showLongitude: '' }, error: '' });

    //GeoLocation Calls this function when user allows location permission from it's system.
    //Then stores location's latitude and longitude values in state.
    const onSuccess = (geoLocationValues) => setCurrentLocation(({ loaded: true, coordinates: { showLatitude: geoLocationValues.coords.latitude, showLongitude: geoLocationValues.coords.longitude }, error: '' }));

    //GeoLocation calls this function when user denies permission or any system generated error.
    //Then stores error message in state.
    const onError = (error) => setCurrentLocation({ loaded: false, error: error.message, });

    //This hook is called once per refreshing the parent component.
    //And helps to fetch the currentlocation if available else will display error.
    useEffect(() => {
        //If in some browser geolocation is not supported than shows below error message.
        !("geolocation" in navigator) && onError({ code: 0, message: "Geolocation not supported" });
        //JS inbuilt Gelocation API, actual object/function to fetch current location using navigator.
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return currentLocation;
}

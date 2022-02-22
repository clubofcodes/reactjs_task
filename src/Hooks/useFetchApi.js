import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * 
 * @param {Api url for fetching data} userApiUrl 
 * @returns objects of data, error and loadingState variable.
 */
export default function useFetchApi(userApiUrl) {
    //Declaring the variables to store data or error, when api call is done.
    const [fetchData, setFetchData] = useState(null);
    const [loadingData, setLoadingData] = useState(false);
    const [error, setError] = useState(null);

    //This hook is to fetch data of particular url passed to function.
    //Will call this hook whenever userApiUrl parameter is modified.
    useEffect(() => {
        setLoadingData(true);
        //axios library to fetched data from api calls.
        axios.get(userApiUrl).then((response) => {console.log(response); setFetchData(response.data); setError(null)}).catch((err) => setError(err)).finally(() => setLoadingData(false));
    }, [userApiUrl]);

    return {fetchData, loadingData, error};
}
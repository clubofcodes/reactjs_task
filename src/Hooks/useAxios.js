import { useState } from 'react';
import axios from 'axios';

/**
 * 
 * @param {Api url for fetching data} userApiUrl 
 * @returns loading(T/F), response in fetchData, error and getData.
 */
export default function useAxios(userApiUrl) {
    //Declaring the variables to store data or error, when api call is done.
    const [fetchData, setFetchData] = useState(null);
    const [loadingData, setLoadingData] = useState(false);
    const [error, setError] = useState(null);

    //axios library to fetched data from api calls.
    const getData = () => {
        setLoadingData(true); //To start loading msg.

        //Method - 1: Axios get method.
        // axios({
        //     method: 'get',
        //     url: userApiUrl,
        //     params: {
        //         _limit: 5
        //     }
        // })
        // .then((response) => {
        //     console.log(response);
        //     setFetchData(response);
        //     setError(null);
        // })
        // .catch((err) => setError(err))
        // .finally(() => setLoadingData(false));

        //Method - 2: Axios get method.
        axios.get(userApiUrl.trim(), { params: { _limit: 2 } }) //axios.get(userApiUrl + '?_limit=2') is another way.
            .then((response) => {
                console.log(response); //logs response returned by get method.
                setFetchData(response); //stores response in fetchData state.
                setError(null); //sets error state, to hide error div when data is successfully fetched.
            })
            .catch((err) => setError(err)) //sets error state with particular error if any.
            .finally(() => setLoadingData(false)); //will set state to false after every call of getData to stop loading.
    }

    return { fetchData, setFetchData, loadingData, error, getData };
}
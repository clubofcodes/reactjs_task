import { useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import './CommonHook.css';
import urlList from '../../Assets/files/apiUrl.json';

export default function FetchApiHook() {
    const [apiUrl, setApiUrl] = useState('./jsonData.json');
    //using custom hook and it's variables for fetching data from api call.
    const { fetchData, setFetchData, loadingData, error, getData } = useAxios(apiUrl);

    const getUrlOnchange = (e) => e.target.value ? setApiUrl(e.target.value) : setApiUrl('./jsonData.json')

    return (
        <div className='mb-3'>
            <p className='topic-heading mb-1'>={'>'} API calls using axios <span className='text-warning'>(Default data is from local json file)</span></p>
            <div className='innertagHook-flex mb-2'>
                <p className='mb-1 text-info'>List of Fake Api Url</p>{urlList.map((urlObj) => <div className='div-flex'><pre className='rectanglebg'>{urlObj.url}</pre></div>)}
                <input type="text" className='urlInput' name="apiUrl" placeholder='Enter api url to fetch data . . .' onChange={(e) => getUrlOnchange(e)} size='50' />
            </div>
            <button className='btn btn-primary btn-lg' onClick={getData}>Get Data</button>
            <button className='btn btn-primary btn-lg ml-2' onClick={() => setFetchData(null)}>Reset Data</button>
            {//If data takes time to load from api call then displays below html code.
                (loadingData) ? <div className='m-3'>Loading...</div> :
                    //If there is an error in fetching data then displays below html code.
                    (error) ? <div><h2 className='error-tag m-3'>{error.message}</h2></div> :
                        //If data is successfully fetched and stored in fetchData variable then displaying data.
                        <div>
                            {
                                (fetchData) &&
                                <div className='text-black text-start m-3'>
                                    <div className="card card-body p-2">
                                        <h5 className='mb-0'>Status: {fetchData.status}</h5>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            Headers
                                        </div>
                                        <div className="card-body">
                                            <pre>{JSON.stringify(fetchData.headers, null, 2)}</pre>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            Data (Default data limit is 2 for all array data urls)
                                        </div>
                                        <div className="card-body">
                                            <pre>{Array.isArray(fetchData.data) ? JSON.stringify(fetchData.data.slice(0, 2), null, 2) : JSON.stringify(fetchData.data, null, 2)}</pre>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            Config
                                        </div>
                                        <div className="card-body">
                                            <pre>{JSON.stringify(Object.keys(fetchData.config).slice(-5).reduce((result, key) => { result[key] = fetchData.config[key]; return result; }, {}), null, 2)}</pre>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
            }
        </div>

    )
}
import { useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import './CommonHook.css';

export default function FetchApiHook() {
    const [apiUrl, setApiUrl] = useState('./jsonData.json');
    //using custom hook and it's variables for fetching data from api call.
    const { fetchData, loadingData, error, getData } = useAxios(apiUrl);

    const getUrlOnchange = (e) => e.target.value ? setApiUrl(e.target.value) : setApiUrl('./jsonData.json')

    return (
        <div>
            <p className='topic-heading'>={'>'} API calls using axios <font style={{ color: 'yellow' }}>(Default data is from local json file)</font></p>
            <div className='innertagHook-flex mb-2'>
                <input type="text" name="apiUrl" placeholder='Enter api url to fetch data . . .' onChange={(e) => getUrlOnchange(e)} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()} size='50' />
            </div>
            <button className='btn btn-primary btn-lg' onClick={getData}>Get Data</button>
            {//If data takes time to load from api call then displays below html code.
                (loadingData) ? <div className='m-3'>Loading...</div> :
                    //If there is an error in fetching data then displays below html code.
                    (error) ? <div><h2 className='error-tag m-3'>{error.message}</h2></div> :
                        //If data is successfully fetched and stored in fetchData variable then displaying data with below html code else show loading.
                        <div>
                            {
                                fetchData &&
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
                                            Data
                                        </div>
                                        <div className="card-body">
                                            <pre>{apiUrl === './jsonData.json' ? JSON.stringify(fetchData.data.studData, null, 2) : JSON.stringify(fetchData.data, null, 2)}</pre>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            Config
                                        </div>
                                        <div className="card-body">
                                            <pre>{JSON.stringify(fetchData.config, null, 2)}</pre>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
            }
        </div>

    )
}
import useFetchApi from '../../Hooks/useFetchApi';

export default function FetchApiHook() {

    //using custom hook and it's variables for fetching data from api call.
    const { fetchData, loadingData, error } = useFetchApi('http://localhost:3001/studData');

    return (
        //If data takes time to load from api call then displays below html code.
        (loadingData) ? <div><hr /><p className='topic-heading'>={'>'} APIs calls using custom Fetch_Hook in Function Component.</p>Loading...</div> :
            //If there is an error in fetching data then displays below html code.
            (error) ? <div><hr /><p className='topic-heading'>={'>'} APIs calls using custom Fetch_Hook in Function Component.</p>{error.message}</div> :
                //If data is successfully fetched and stored in fetchData variable then displaying data with below html code else show loading.
                <div><hr /><p className='topic-heading'>={'>'} API calls using custom Fetch_Hook in Function Component.</p>{fetchData ? fetchData.map((student) => <h2 className='innertag-flex' key={student.email}><p className='rectanglebg'>Name: {student.name} {'&'} Email: {student.email}</p></h2>) : <div><hr /><p className='topic-heading'>={'>'} APIs calls using custom Fetch_Hook in Function Component.</p>Loading...</div>}</div>
    )
}
import useAxios from '../../Hooks/useAxios';

export default function FetchApiHook() {

    //using custom hook and it's variables for fetching data from api call.
    const { fetchData, loadingData, error } = useAxios('./jsonData.json');

    return (
        <div>
            {//If data takes time to load from api call then displays below html code.
                (loadingData) ? <div><p className='topic-heading'>={'>'} APIs calls using FetchAPI Hook</p>Loading...</div> :
                    //If there is an error in fetching data then displays below html code.
                    (error) ? <div><p className='topic-heading'>={'>'} APIs calls using FetchAPI Hook</p><h2 className='error-tag'>{error.message}</h2></div> :
                        //If data is successfully fetched and stored in fetchData variable then displaying data with below html code else show loading.
                        <div><p className='topic-heading'>={'>'} API calls using FetchAPI Hook</p>{fetchData ? fetchData.map((student) => <div className='div-flex' key={student.email}><p className='rectanglebg'>Name: {student.name} {'&'} Email: {student.email}</p></div>) : <div><hr /><p className='topic-heading'>={'>'} APIs calls using FetchAPI Hook</p>Loading...</div>}</div>}
        </div>

    )
}
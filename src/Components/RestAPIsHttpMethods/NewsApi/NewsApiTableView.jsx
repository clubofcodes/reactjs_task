import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxios from '../../../Hooks/useAxios';
import './NewsApi.css';

export const NewsApiTableView = () => {

    //Axios get api custom hook initialization. (Another api key: 5e2bf06e14da4235bb4c44968f4b622c)
    const { fetchData, setFetchData, loadingData, getData } = useAxios('https://newsapi.org/v2/everything?q=apple&apiKey=77904a0536f5448b8c56dc59fc7ddeaa');

    console.log(fetchData?.data);
    //State for load more data initially shows 10 row only.
    const [limitData, setLimitData] = useState(5);

    //State for search keywords to search from table.
    const [searchKeys, setSearchKeys] = useState('');

    //To navigate to particular route/path.
    const navigate = useNavigate();

    //To store memorized value of filtered data array, this helps when other then dependencies, state of this component changes will not filter again.
    const filteredData = useMemo(() => fetchData?.data.articles.filter(news => news.author.toLowerCase().match(new RegExp(searchKeys.toLowerCase(), 'g'))) || [], [fetchData, searchKeys])

    //To fetch data on component mount.
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h3 className='topic-heading'>={'>'} Apple News API</h3>
            < div className='mt-3 innertagHook-flex'>
                <p>Type any author's first 2 letter to search.</p>
                <input type="text" className="w-100" name="searchInput" placeholder='Search . . .' onChange={(e) => setSearchKeys(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()} />
            </div>
            {
                //For displaying msg of no data found by search value.
                (filteredData.length === 0 && fetchData?.data !== undefined) && <div className="topic-heading error-tag mt-4 span-font">No such author found.</div>
            }
            {
                //Actual data to display in table rows.
                (loadingData) ? <div className='m-3'>Loading...</div> :
                    filteredData.length > 0 && <div className="div-flex">
                        <table className="table table-bordered table-light text-start table-hover mt-3" style={{ borderRadius: '10px' }}>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Author</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Published At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((news, index) => (
                                    (index < limitData) && <tr key={index} onClick={() => navigate(index.toString(), { state: { newsData: news } })}>
                                        <td width='5%'>{(index + 1) + ').'}</td>
                                        <td width='12%'>{news.author}</td>
                                        <td width='20%'>{news.title}</td>
                                        <td width='30%'>{news.description}</td>
                                        <td width='15%'>{news.publishedAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
            {
                //For buttons to show and hide as per clicked and search.
                ((!loadingData) && (filteredData.length > 0)) && <div>
                    {limitData > 5 && (< button type='button' className='btn btn-info btn shadow-none mb-3 mx-3' onClick={() => setLimitData(5)}>Load Less</button>)}
                    <button type='button' className='btn btn-info btn shadow-none mb-3' onClick={() => limitData === fetchData?.data.articles.length ? alert('Maximum Data reached!!') : setLimitData(limitData + 5)}>Load More</button>
                </div>
            }
        </div >
    )
}

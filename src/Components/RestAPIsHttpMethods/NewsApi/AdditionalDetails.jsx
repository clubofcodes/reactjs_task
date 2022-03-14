import { useLocation, useParams } from 'react-router-dom';
import './NewsApi.css';

export const AdditionalDetails = () => {
    //To fetch parameters in url after colon.
    const { id } = useParams();

    const location = useLocation();

    console.log(location?.state);

    return (
        <div>
            <h3 className='topic-heading'>={'>'} Row No. {parseInt(id) + 1} Aditional Content</h3>
            {
                (location.state) &&
                <div className='text-black text-start m-3'>
                    <div className="card mt-3">
                        <div className="card-header text-center">
                            <img className="w-50" src={location.state.newsData.urlToImage} alt="News Author Image" />
                        </div>
                        <div className="card-body card-body-fonts">
                            <span className="text-danger span-font">Author:</span> {location.state.newsData.author}
                            <br />
                            <span className="text-danger span-font">Detailed Content:</span> {location.state.newsData.content}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

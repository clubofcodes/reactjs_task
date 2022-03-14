import { useState } from 'react';
import useAxios from '../../Hooks/useAxios';

export const DisplayWordRhymes = () => {

    const [inputWord, setInputWord] = useState('');

    // https://api.datamuse.com/words?rel_rhy=tiger
    const { fetchData, loadingData, getData } = useAxios('https://rhymebrain.com/talk?function=getRhymes&word=' + inputWord);

    const searchRhymes = (e) => {
        e.preventDefault();
        e.target.word.value ? setInputWord(e.target.word.value) : alert('Type any word to find it\'s rhymes.');
        e.target.word.value && getData()
    }

    return (
        <div>
            {(inputWord && (fetchData?.data.length === 0) && (!loadingData)) && <div className="div-flex mb-3 text-info"><span>No math found...</span></div>}

            <form onSubmit={searchRhymes} className="div-flex">
                <input type="text" name="word" />
                <button type="submit" className="btn btn-success btn-lg shadow-none">Submit</button>
            </form>
            {
                (loadingData) ? <div className='m-3'>Loading...</div> :
                    <div className="d-flex flex-wrap justify-content-between mt-4 text-warning">
                        {fetchData?.data.length > 0 && fetchData.data.map((rhyme) => <span key={rhyme.word} style={{ fontSize: 'large' }}>{rhyme.word}{','} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)}
                    </div>
            }
        </div>
    )
}



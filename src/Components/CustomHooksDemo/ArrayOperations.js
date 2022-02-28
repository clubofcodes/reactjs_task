import useArray from '../../Hooks/useArray';
import './CommonHook.css'

export default function ArrayOperations() {

    //Array operation custom hook initialization/declaration.
    const { isArrEmpty, addInArr, removeArrElement, filterArrElement, sortArray, newArray, searchArray, isSearchAvailable, findArrElement } = useArray(['Hello There!!', 'Array values this side...', 'Add anything into me']);

    //handles the form submission, prevents from default form actions and duplicate value validation.
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputValue = e.target.valueInput.value;

        //if input in null/empty then first condition.
        !inputValue ? alert('Please enter any value to add into array!!') :
            //if value same value as in newArray then second condition.
            findArrElement(inputValue) ? alert('Duplicate(Same) value not allowed.') :
                //else add new value to array.
                addInArr(inputValue);

        //to clear input field.
        e.target.valueInput.value = '';
    }

    return (
        <div>
            <p className='topic-heading'>={'>'} Array Operations using De-Structuring method (click any value to delete)</p>

            {/* Displays Array each data in p tag */}
            {//when user search for value in array and found nothing than display no data.
                isArrEmpty(searchArray) ? <p className='topic-heading error-tag'>No Data Found.</p> :
                    //when user search for value in array and found than displays found data only.
                    (!isArrEmpty(searchArray) && isSearchAvailable) ? searchArray.map((eachValue, valueIndex) => <div className='div-flex' key={eachValue}><p className='rectanglebg' onClick={() => removeArrElement(eachValue, valueIndex)} key={eachValue}>{eachValue}</p></div>) :
                        //else display 'newArray' elements which contains all data.
                        newArray.map((eachValue, valueIndex) => <div className='div-flex' key={eachValue}><p className='rectanglebg' onClick={() => removeArrElement(eachValue, valueIndex)} key={eachValue}>{eachValue}</p></div>)
            }

            <button type='button' className='btn btn-info btn shadow-none mb-3' onClick={sortArray}>Sort Array</button>
            <form onSubmit={handleSubmit}>
                <div className='div-flex'>
                    <input type="text" name="valueInput" placeholder='Enter value to add . . .' />
                    <button type='submit' className='btn btn-primary shadow-none'>Add into Array</button>
                </div>
            </form>
            <div className='mt-3 innertagHook-flex'>
                <p>Type any keywords to search in array</p>
                <input type="text" name="searchInput" placeholder='Search . . .' onChange={(e) => filterArrElement(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()} />
            </div>
        </div>
    )
}

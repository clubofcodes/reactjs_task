import { useState } from "react";

export default function useArray(initialArray) {

    const [newArray, setNewArray] = useState(initialArray);
    const [searchArray, setSearchArray] = useState(newArray);
    const [isSearchAvailable, setIsSearchAvailable] = useState(false)

    // console.log(newArray);

    //Checks array passed in argument is empty?
    const isArrEmpty = (userArray) => userArray.length === 0;

    //To add element 'newValue' passed as parameter into user's initialArray and set state in newArray.
    const addInArr = (newValue) => {
        // setNewArray(newArray.concat(newValue)); //Method - 1
        // newArray.splice(newArray.length, 0, newValue); setNewArray([...newArray]); // Method - 2
        // newArray.push(newValue); setNewArray([...newArray]); // Method - 3
        // newArray.unshift(newValue); setNewArray([...newArray]); // Method - 4 => The unshift() method adds an element to the start of the original array and returns the length of the array.
        // setNewArray([...newArray, newValue]); // Method - 5 => Without Set method will allow duplicate values.
        setNewArray([...new Set([...newArray, newValue])]); // Method - 5 => With Set won't allow duplicate values.
    }

    //To arrange the list of array elements in Alphabetic ascending order.
    const sortArray = () => setNewArray([...newArray.sort()])

    //To remove element from newArray as per value/index passed as parameter and return the updated array.
    const removeArrElement = (arrValue, arrIndex) => {
        // delete newArray[arrIndex] //Method - 1 => leaves value undefined/empty at particular index
        newArray.splice(arrIndex, 1); setNewArray([...newArray]);  //Method - 2 => removed the index value and 1 defines only 1 value at a time.
        // newArray.shift(arrValue); setNewArray([...newArray]);  //Method - 3 => The shift() method removes the first element from original array and returns that removed element.
        // setNewArray([...newArray.filter((_,elementIndex) => elementIndex !== arrIndex)]); //Method - 4  => returns new array apart from test/condition value.
    }

    //To filter & return the data searched by the user with keywords passed in parameter.
    const filterArrElement = (filterValue) => {
        const searchTerm = filterValue.toLowerCase();

        if (searchTerm.length > 0) {
            setSearchArray(newArray.filter(arrElement => arrElement.toLowerCase().match(new RegExp(searchTerm, 'g'))));
            setIsSearchAvailable(true);
        } else {
            setSearchArray(newArray);
            setNewArray(newArray);
            setIsSearchAvailable(false);
        }
    }

    //To find only particular value passed in parameter into newArray and handle duplication of data.
    const findArrElement = (findValue) => {
        // return newArray.find((arrElement) => arrElement === findValue) //Method - 1 => returns the found value else undefined.
        // return newArray.some((arrElement) => arrElement === findValue); //Method - 1 => returns true if found else false as per conditions.
        return newArray.includes(findValue); //Method - 3 => returns true if found else false. Does only equalTo comparision.
    }

    return { isArrEmpty, addInArr, removeArrElement, filterArrElement, sortArray, newArray, searchArray, isSearchAvailable, findArrElement }
}

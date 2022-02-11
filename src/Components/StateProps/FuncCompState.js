import React, { useEffect, useState } from 'react'

//useState, useEffect all are hooks for functional component.
function FuncCompState() {

    //First element is var_name & second is it's method to update the variable.
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log(count); //will not get updated value in same func.
    }

    //to get the updated value use this hook.
    useEffect(() => {
        console.log('Count in useEffect: ', count);
    }, [count]);
    //[] => is dependency list, without that it will be rendered/called everytime.
    //[] => with empty list, it will be called only once can check it by keeping empty.
    //[count] => after giving var to it, it will be called whenever count is updated.

    return (
        <div>
            <br />
            ={'>'} State Method In Functional Component (See Logs)
            <p>Counter: {count}</p>
            <button onClick={increment}>Count</button>
        </div>
    )
}

export default FuncCompState;
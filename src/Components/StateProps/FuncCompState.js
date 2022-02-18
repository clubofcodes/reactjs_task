import React, { useEffect, useState } from 'react'

//useState, useEffect all are hooks for functional component.
function FuncCompState() {

    //First element is var_name & second is it's method to update the variable.
    const [count, setCount] = useState(0);
    const [x, setX] = useState(-1);

    //increments the value of count var & update it's state.
    const increment = () => {
        setCount(count + 1);
        console.log(count); //will not get updated value in same func.
    }

    //To perform particular task/operation inside useEffect as per need use this hook.
    //It is somewhat like this.setState({}, callback()) <=> useEffect(callback(),dependency list)
    //at present it will display recent/updated value of count & x and than it will return some task,
        //that increases value of x by 1 after 2sec whenever count is updated.
    useEffect(() => {
        console.log('Count in useEffect: ', count);
        console.log('x in useEffect: ', x);
        return setTimeout(() => {setX(x+1)}, 1000);
    }, [count]);
    //[] => is dependency list, without that it will be rendered/called everytime.
    //[] => with empty list, it will be called only once can check it by keeping empty.
    //[count] => after giving var to it, it will be called whenever count is updated.

    return (
        <div>
            <br />
            ={'>'} State Method In Functional Component (See Logs)
            <p>Counter: {count}</p>
            ={'>'} Update's the X once above counter is updated.
            <p>X(Wait 1 sec to update): {x}</p>
            <button onClick={increment}>Count</button>
        </div>
    )
}

export default FuncCompState;
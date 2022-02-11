import React from 'react';

// Method - 1  
// function FuncCompProps(props) {
//     return (
//         <div> {props.fullName} </div>
//     )
// }

//Method - 2
const FuncCompProps = (props) => {
    console.log('Functional Component Props: ', props);
    return (
        <div>
            ={'>'} Props In Functional Component. (See Logs)
            <p>Hello {props.shortName} a.k.a {props.fullName}</p>
            {props.children}
        </div>
    );
}

export default FuncCompProps;
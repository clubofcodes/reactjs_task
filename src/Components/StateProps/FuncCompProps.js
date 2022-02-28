import React from 'react';

// Method - 1 (Regular function)
// function FuncCompProps(props) {
//     return (
//         <div> {props.fullName} </div>
//     )
// }

//Method - 2 (Using arrow function)
const FuncCompProps = (props) => {
    console.log('Functional Component Props From Parent App Component: ', props);
    return (
        <div>
            ={'>'} Props In Functional Component. (See Logs)
            <p>Hello {props.shortName} a.k.a {props.fullName}</p>
            {props.children}
        </div>
    );
}

export default FuncCompProps;
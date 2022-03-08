import React, { Component } from 'react'

class ClassCompProps extends Component {
    render() {
        console.log('Class Component Props From Parent App Component: ', this.props); //it returns an object of attributes passed in component declaring.
        return (
            <div>
                ={'>'} Props In Class Component. (See Logs)
                <p>Welcome {this.props.shortName} a.k.a {this.props.fullName}</p>
            </div>
        )
    }
}

export default ClassCompProps;
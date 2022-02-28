import React, { Component } from 'react'

class ChildComp extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.greetHandler.bind(this, 'Child')}>Greeting Alert Button In Child</button>
            </div>
        )
    }
}

export default ChildComp;
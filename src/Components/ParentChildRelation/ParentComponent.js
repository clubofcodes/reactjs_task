import React, { Component } from 'react';
import ChildComp from './ChildComp';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { parentName: 'Parent' }
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <br />
                ={'>'} Parent-Child Component Relationship.
                <ChildComp greetHandler={this.greetParent.bind(this)} />
            </div>
        )
    }
}

export default ParentComponent;
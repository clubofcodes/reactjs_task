import React, { Component } from 'react';

// Lifecycle methods can be implemented only in class components. => Mainly 3-Types: Creating, Updating and Deleting.
// For functional components we can use hooks.
class Lifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Rahul Jagetia',
        }
        console.log('---------Lifecycle\'s Starting with Constructor---------');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle\'s getDerivedStateFromProps!!');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle\'s componentDidMount!!');
        console.log('\n');
    }

    shouldComponentUpdate() {
        console.log('Lifecycle\'s shouldComponentUpdate!!');
        return true; //if false than no changes will be performed in state even after button clicked.
    }

    getSnapshotBeforeUpdate() {
        console.log('Lifecycle\'s getSnapshotBeforeUpdate!!');
        return null;
    }

    componentDidUpdate() {
        console.log('Lifecycle\'s componentDidUpdate!!');
    }

    componentWillUnmount() {
        console.log('Lifecycle\'s componentWillUnmount!!');
    }

    changeState = () => {
        this.setState({ name: 'RJ' });
        console.log('------------Lifecycle\'s after updating variable name in state------------');
    }

    render() {
        console.log('Lifecycle\'s Rendering Method!! ', this.state.name);
        return (
            <div>
                <p className='topic-heading'>={'>'} Lifecycle ~ To see other lifecycle methods click below button (Observe logs).</p>
                <button className='mb-2' onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default Lifecycle
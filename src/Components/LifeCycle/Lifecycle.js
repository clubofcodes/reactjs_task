import React, { Component } from 'react';
import './Lifecycle.css';

// Lifecycle methods can be implemented only in class components. => Mainly 3-Types: Creating, Updating and Deleting.
// For functional components we can use hooks.
class Lifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Rahul Jagetia',
        }
        console.log('Lifecycle\'s Constructor!!');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle\'s getDerivedStateFromProps!!');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle\'s componentDidMount!!');
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

    componentWillUnmount(){
        console.log('Lifecycle\'s componentWillUnmount!!');
    }

    changeState = () =>{
        this.setState({name: 'RJ'});
    }

    render() {
        console.log('Lifecycle\'s Rendering Method!! ', this.state.name);
        return (
            <div>
                <hr />
                <p>Lifecycle ~ To see logs of other Lifecycle methods click below button.</p>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default Lifecycle
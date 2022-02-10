import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Rahul Jagetia' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({name:'Rahul Jagetia'}); 
            //if same name as initial_state than only Regular component will re-render & vice-versa.;
            //pure component will not re-render for same value.
        }, 2000);
    }

    render() {
        console.log('----------Parent Component----------');
        return (
            <div>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
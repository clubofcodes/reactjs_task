import React, { Component } from 'react'

class ConditionApproaches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        }
        this.firstApproach = this.if_elseBasic.bind(this);
    }

    // if-else approach
    if_elseBasic() {
        if (this.state.isShow) alert('First If-Else Approach');
        else alert('Not an authorised user!!');
    }

    //element-variable approach
    elementApproach = () => {
        let msg;
        if (this.state.isShow) msg = 'Second Element-Variable Approach';
        else msg = 'Not an authorised user!!';
        alert(msg);
    }

    //ternary-operator approach
    ternaryApproach() {
        return this.state.isShow ? (
            alert("Third Ternary Approach")
        ) : (
            alert("Not an authorised user!!")
        )
    }

    //short-circuit-operator approach for only 1 condition.
    shortCircuitApproach() {
        return (this.state.isShow && alert('Fourth ShortCircuit Approach'))
    }

    changeState = () => this.state.isShow ? this.setState({ isShow: !this.state.isShow }) : this.setState({ isShow: !this.state.isShow });

    render() {
        return (
            <div>
                <br />
                ={'>'} Diffrent types of Condition Approaches.
                <div><button onClick={this.changeState}>Change State (T/F)</button></div>
                <button onClick={this.firstApproach}>First Approach</button>
                <button onClick={this.elementApproach}>Second Approach</button>
                <button onClick={this.ternaryApproach.bind(this)}>Third Approach</button>
                <button onClick={this.state.isShow ? () => this.shortCircuitApproach() : this.firstApproach}>Fourth Approach</button>
            </div>
        )
    }
}

export default ConditionApproaches;
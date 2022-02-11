import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super();
        this.state = { msg: 'Hello There!!' }
        this.clickHandler = this.clickHandler2.bind(this);
    }

    clickHandler1() {
        this.setState({ msg: 'Hello Dear!!' }, () => console.log('Handler-1 ', this.state.msg));
    }

    clickHandler2 = () => {
        this.setState({ msg: 'Good Bye!!' }, () => console.log('Handler-2 ', this.state.msg));
    }

    render() {
        return (
            <div>
                ={'>'} Event Binding In Class Component (See Logs)
                <p>Message: {this.state.msg}</p>
                <button onClick={() => this.clickHandler1()}>Method - 1</button>
                <button onClick={this.clickHandler1.bind(this)}>Method - 2</button>
                <button onClick={this.clickHandler}>Method - 3</button>
                <button onClick={this.clickHandler2}>Method - 4</button>
            </div>
        )
    }
}

export default EventBind;
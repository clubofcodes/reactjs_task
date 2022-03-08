import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super();
        this.state = { msg: 'Hello There!!' }
        this.clickHandler = this.clickHandler2.bind(this);
    }

    clickHandler1(clikMsg) {
        this.setState({ msg: 'Hello, ' + clikMsg }, () => console.log('Handler-1 ', this.state.msg));
    }

    clickHandler2 = (clikMsg) => {
        this.setState({ msg: 'Hello, ' + clikMsg }, () => console.log('Handler-2 ', this.state.msg));
    }

    render() {
        return (
            <div>
                ={'>'} Event Binding In Class Component (See Logs)
                <p>Message: {this.state.msg}</p>
                <button className="mb-2" onClick={() => this.clickHandler1('Dear!!')}>Method - 1: (() ={'>'} this.clickHandler1(params))</button>
                <div className="mb-2"><button onClick={this.clickHandler1.bind(this, 'Bind')}>Method - 2: (this.clickHandler1.bind(this,params))</button></div>
                <p className="mb-0">Assigned in constructor  ={'>'} (this.clickHandler= this.clickHandler2.bind(this);)</p>
                <button className="mb-2" onClick={this.clickHandler.bind(this,'Handler')}>Method - 3: (this.clickHandler)</button>
                <p className="mb-0">Defined Arrow function and called using ={'>'} (this.clickHandler2)</p>
                <button className="mb-2" onClick={() => this.clickHandler2('Arrow Function')}>Method - 4: (this.clickHandler2)</button>
                <div className="div-flex"><p className="rectanglebg mb-2 text-danger text-wrap">Note: If we pass parameters to arrow function then have to call that function similar to first Method.</p></div>
            </div>
        )
    }
}

export default EventBind;
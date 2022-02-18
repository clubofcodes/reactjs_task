import React, { Component } from 'react'

class ClassCompState extends Component {

    constructor() {
        super();
        this.state = {
            text: 'Click on count for increment.',
            count: 0
        }
    }

    increment = () => {
        //we can't assign any value to var directly like this.state.var_name=value.
        //Everytime we have to use setState() method to update it.
        this.setState({ count: this.state.count + 1 }); //Method-1

        //Method-2: if prev value is not known than can be fetch like this.
        // this.setState((prevState) => (
        //     { count: prevState.count + 1 }
        // ));

        //at present you won't get last updated value in same func. But last second value.
        console.log('Before Updated Value: ', this.state.count);

        //Method-3: if want previous and updated both value.
        //To get the recent updated value from state or to perform any task with current value after the state is updated using callback function.
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log('Callback: ', this.state.count));

        //To see the previous state and current updated state together using callback.
        this.setState(
            (prevState) => {
                console.log('Old Count: ', prevState.count);
                return { count: prevState.count + 1 }
            },
            () => console.log('New Count: ', this.state.count)
        );
    }

    render() {
        return (
            <div>
                <hr />
                ={'>'} State Method In Class Component. (See Logs)
                <p>{this.state.text}</p>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.increment}>Count</button>
            </div>
        )
    }
}

export default ClassCompState;
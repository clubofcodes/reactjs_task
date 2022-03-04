import React, { Component } from "react";
import CounterHOC from "../HOCs/CounterHOC";

class CommentsCount extends Component {
    render() {
        return (
            <div>
                Total Comments : {this.props.CountNumber} <br />
                <button onClick={this.props.handleCLick}>Add Comment!</button>
            </div>
        );
    }
}

const EnhancedComments = CounterHOC(CommentsCount, 10);

export default EnhancedComments;
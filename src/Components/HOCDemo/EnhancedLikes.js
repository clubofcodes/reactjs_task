import React, { Component } from "react";
import CounterHOC from "../HOCs/CounterHOC";

class LikesCount extends Component {
    render() {
        return (
            <div>
                <p className="topic-heading mt-4">={'>'}HOC Demo of Counters</p>
                Total Likes : {this.props.CountNumber} <br />
                <button onClick={this.props.handleCLick}>Like👍🏻</button>
            </div>
        );
    }
}

const EnhancedLikes = CounterHOC(LikesCount, 5);

export default EnhancedLikes;
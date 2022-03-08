import React, { Component } from "react";
import CounterHOC from "../HOCs/CounterHOC";

class LikesCount extends Component {
    render() {
        return (
            <div>
                <p className="topic-heading">={'>'}Common Counters using HOC in class component</p>
                Total Likes : {this.props.CountNumber} <br />
                <button className="mb-3" onClick={this.props.handleCLick}>Like👍🏻</button>
            </div>
        );
    }
}

const EnhancedLikes = CounterHOC(LikesCount, 5);

export default EnhancedLikes;
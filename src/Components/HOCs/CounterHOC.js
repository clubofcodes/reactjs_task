import React from 'react'

const CounterHOC = (UserComponent, data) => {
    //console.log("data", data);

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: data,
            };
        }

        handleClick = () => {
            this.setState({
                count: this.state.count + 1,
            });
        };

        render() {
            return (
                <UserComponent
                    CountNumber={this.state.count}
                    handleCLick={this.handleClick}
                />
            );
        }
    };
};

export default CounterHOC;
import React, { Component } from 'react'

//RegComp does not implement shouldComponentUpdate method rather than that it always returns true.
//So, it always re-renders wether there is difference or not.
class RegComp extends Component {
  render() {
    console.log('Regular Component');
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComp;
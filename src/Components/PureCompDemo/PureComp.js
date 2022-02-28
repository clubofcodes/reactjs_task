import React, { PureComponent } from 'react'

//If there is no difference, the component is not re-rendered => Performance boost.
class PureComp extends PureComponent {
  render() {
    console.log('Pure Component Called');
    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp
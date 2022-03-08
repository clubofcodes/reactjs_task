import React, { Component } from 'react'
import UserContext, { UserConsumer } from '../../Utils/userContext'

class ContextAPI extends Component {
  static contextType = UserContext; //Method - 2: FirstWay.

  render() {
    return (
      <div>
        {/* Method - 1: Globally valid for multiple context. */}
        <UserConsumer>
          {
            (Username) => {
              return <div>User Consumer Callback value, Hello ={'>'} {Username}</div>
            }
          }
        </UserConsumer>
        {/* <UserContext.Consumer> //Method - 1: SecondWay to Use consumer.
          {
            (Username) => {
              return <div>Hello {Username}</div>
            }
          }
        </UserContext.Consumer> */}

        {/* Method - 2: Only for single context and in class component. */}
        ContextAPI context from App.js Component ={'>'} {this.context}
      </div>
    )
  }
}

//Method - 2: SecondWay to Use context. syntax=> <CompName.contextType = ContextName>;
// ContextAPI.contextType = UserContext;

export default ContextAPI;
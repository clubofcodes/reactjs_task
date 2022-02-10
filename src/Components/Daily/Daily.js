import React, { Component } from 'react'
import UserContext, { UserConsumer } from '../../Utils/userContext'

class Daily extends Component {
  static contextType = UserContext; //Method - 2: FirstWay.

  render() {
    return (
      <div>
        <hr />
        {/* Method - 1: Globally valid for multiple context. */}
        <UserConsumer>
          {
            (Username) => {
              return <div>Hello ={'>'} {Username}</div>
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
        Daily Component context from App.js ={'>'} {this.context}
      </div>
    )
  }
}

//Method - 2: SecondWay to Use context. syntax=> <CompName.contextType = ContextName>;
Daily.contextType = UserContext;

export default Daily;
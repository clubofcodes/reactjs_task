import React from 'react';
import logo from './Assets/lessRes.jpg';
import './App.css';
import Todo from './Components/Todo/Todo';

// React Props are like function arguments in JavaScript and attributes in HTML.
// The component receives the argument as a props object:
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-flip-box'>
          <div className='App-flip-box-inner'>
            <div className='App-flip-box-front'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='App-flip-box-back'>
              <div style={{ padding: '50px 0' }}>
                {/* use the 'owner_name' attribute assigned in index.js is used here. */}
                Hello, {props.owner_name.fname} {props.owner_name.lname}
                <p>Welcome to React World!</p>
              </div>
            </div>
          </div>
        </div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>

        <div>
          <Todo />
        </div>
      </header>
    </div>
  );
}

export default App;

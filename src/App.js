import React from 'react';
import logo from './Assets/lessRes.jpg';
import './App.css';

// Input data that is passed into the React.component can be accessed by render() method via this.props.
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-flip-box'>
          <div className='App-flip-box-inner'>
            <div className='App-flip-box-front'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='App-flip-box-back'>
              <div style={{padding: '50px 0'}}>
                <HelloMessage name="Rahul Jagetia" />
                <p>Welcome to React World!</p>
              </div>
            </div>
          </div>
        </div>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>
  );
}

export default App;

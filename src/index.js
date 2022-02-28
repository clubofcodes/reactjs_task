import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap CSS classes.
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing jquery and popper properties.
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const full_name = { fname: "Rahul", lname: "Jagetia" };

ReactDOM.render(
  <React.StrictMode>
    {/* Add a "owner_name" attribute to the App element(Component in react) */}
    <App owner_name={full_name} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

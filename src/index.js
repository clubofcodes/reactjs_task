import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap Js&CSS classes.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import { NavbarTopicList } from './Layouts/Header/NavbarTopicList';

const full_name = { fname: "Rahul", lname: "Jagetia" };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="d-flex flex-column flex-nowrap overflow-hidden mw-100 fix-inset-0 h-100 text-center">
        <NavbarTopicList />
        {/* Add a "owner_name" attribute to the App element(Component in react) */}
        <App owner_name={full_name} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

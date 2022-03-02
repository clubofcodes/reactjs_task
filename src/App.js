import React from 'react';
import logo from './Assets/img/lessRes.jpg';
import './Assets/Css/custom.css';
import './App.css';
import Todo from './Components/Todo/Todo';
import Lifecycle from './Components/LifeCycle/Lifecycle';
import Daily from './Components/Daily/Daily';
import { UserProvider } from './Utils/userContext';
import ParentComp from './Components/PureCompDemo/ParentComp';
import ClassCompState from './Components/StateProps/ClassCompState';
import FuncCompState from './Components/StateProps/FuncCompState';
import ClassCompProps from './Components/StateProps/ClassCompProps';
import FuncCompProps from './Components/StateProps/FuncCompProps';
import EventBind from './Components/EventBinding/EventBind';
import ParentComponent from './Components/ParentChildRelation/ParentComponent';
import ConditionApproaches from './Components/ConditionalStatements/ConditionApproaches';
import CssDemo from './Components/CssComponent/CssDemo';
import FormikForm from './Components/Forms/FormikForm';
import HookForm from './Components/Forms/HookForm';
import AjaxFetchClassComp from './Components/RestAPIsHttpMethods/AjaxFetchClassComp';
import AxiosApiHook from './Components/CustomHooksDemo/AxiosApiHook';
import DisplaySystemInfo from './Components/CustomHooksDemo/DisplaySystemInfo';
import ShowCurrentLocation from './Components/CustomHooksDemo/ShowCurrentLocation';
import FormDataStorage from './Components/CustomHooksDemo/FormDataStorage';
import ArrayOperations from './Components/CustomHooksDemo/ArrayOperations';
import CopyToClipboard from './Components/CustomHooksDemo/CopyToClipboard';
import MultiHookComponent from './Components/HooksMethodsDiffrences/MultiHookComponent';

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
              <div>
                {/* use the 'owner_name' attribute assigned in index.js. */}
                Hello, {props.owner_name.fname} {props.owner_name.lname}
                <p>Welcome to React World!</p>
              </div>
            </div>
          </div>
        </div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
      <div className='react-components'>
        <div className='day-1'>
          <Todo />
        </div>

        <div className='day-2'>
          <Lifecycle />
          <ParentComp />
        </div>

        <div className='day-3'>
          <ClassCompProps shortName="RJ" fullName="Rahul Jagetia" />
          <FuncCompProps shortName="RJ" fullName="Rahul Jagetia">
            <p>This is children props of P-Tag.</p>
          </FuncCompProps>
          <ClassCompState />
          <FuncCompState />
          <EventBind />
          <ParentComponent />
          <ConditionApproaches />
        </div>

        <div className='day-4'>
          <CssDemo warning={true} />
        </div>

        <div className='day-5'>
          <MultiHookComponent/>
        </div>

        <div className='day-6'>
          <UserProvider value='RJ'>
            <Daily />
          </UserProvider>
          {/* <UserContext.Provider value='SecondWay to Use provider'>
            <Daily />
          </UserContext.Provider> */}
        </div>

        <div className='day-8'>
          <FormikForm />
          <HookForm />
        </div>

        <div className='day-9'>
          <AjaxFetchClassComp />
        </div>

        <div className='day-10'>
          <hr />
          <p className='topic-heading'>={'>'} Custom Hooks Demo in Function Component using De-Structuring method.</p>
          <AxiosApiHook />
          <DisplaySystemInfo />
          <ShowCurrentLocation />
          <FormDataStorage />
          <ArrayOperations />
          <CopyToClipboard />
        </div>
      </div>
    </div>
  );
}

export default App;

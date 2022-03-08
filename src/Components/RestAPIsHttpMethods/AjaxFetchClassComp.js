import React, { Component } from 'react';
import '../../Assets/Css/custom.css';
import { CallApiBtn } from './ContextCallApiFuncComp';

//Defining context and exporting for sending object with callback() to another component.
export const UserContext = React.createContext({ callApi: (response) => response })
export default class AjaxFetchClassComp extends Component {

    constructor() {
        super();
        this.state = { error: '', isLoaded: false, isErrWaiting: false, resWaitTime: 5, dataLoadTime: 5, students: [] };
    }

    /**
     * @param {Seconds: to reduce and store in state} sec
     * @param {Boolean: true if api throws error else false} errorTime 
     * Does decrement of 5sec till 1sec and sets value to state. That updates value to DOM.
     */
    countDown(sec, errorTime) {
        if (this.state.error !== '' || !errorTime) {
            const intervalID = setInterval(() => {
                //Decreases seconds by 1 after every 1sec, then displays data and stops interval.
                (--sec === 0) && this.setState({ isLoaded: true }, () => clearInterval(intervalID));
                //If error than Sets state of responseWaitingTime else dataLoadingTime.
                errorTime ? this.setState({ resWaitTime: sec }) : this.setState({ dataLoadTime: sec })
            }, 1000);
        }
    }

    //Lifcycle method: It is called whenever data is updated in state.
    componentDidUpdate() {
        //When errorApi timer reaches to zero call Second api.
        if (this.state.resWaitTime === 0) {
            //prevents from fetching data again.
            this.setState({ error: '', resWaitTime: 5 });
            //=>This sends an HTTP GET request from React to the npm api,
            //then assigns the total returned in the response to the component state.
            //=>returns promises either resolve(response with APIs data in object) or reject(throws error).
            fetch("http://localhost:3001/studData").then(response => response.json()).then((resData) => this.setState({ students: resData, isLoaded: true, error: '' }, () => this.countDown(this.state.dataLoadTime, false)), (error) => this.setState({ error, isErrWaiting: false, students: ['Second'] }, () => this.countDown(this.state.resWaitTime, true)))
        }
    }

    //This function is for First api to get error from fetch(),
    //which is called by another component using contextApi callback method.
    showApiError = () => {
        this.setState({ isErrWaiting: true }); //To validate first condition to true for rendering the Loading <div>
        fetch("http://localhost:301/studData").then(response => response.json()).then((resData) => this.setState({ students: resData, isLoaded: true, error: '' }, () => this.countDown(this.state.dataLoadTime, false)), (error) => this.setState({ error, isErrWaiting: false, students: ['First'] }, () => this.countDown(this.state.resWaitTime, true)))
    }

    render() {
        return (
            //Another component onClick event: if condition to display loading at first.
            (this.state.isErrWaiting) ? <div><p className='topic-heading'>={'>'} AJAX and APIs calls using fetch() in Class Component.</p>Loading...</div> :
                //Shows error thrown by first/second api with countdown from 5 to 1sec and then calls second api.
                (this.state.error !== '') ? <div><p className='topic-heading'>={'>'} AJAX and APIs calls using fetch() in Class Component.</p>{this.state.students[0]} APIs Error: <p className='error-tag mt-1'>{this.state.error.message}</p> (wait for {this.state.resWaitTime}sec to fetch data)</div> :
                    <div>
                        <p className='topic-heading'>={'>'} AJAX and APIs calls using fetch() in Class Component.</p>
                        {/* Hides the button of another component after data is loaded. */}
                        {(!this.state.isLoaded && <UserContext.Provider value={{ name: 'RJ', callApi: this.showApiError }}> <CallApiBtn /> </UserContext.Provider>)}
                        {/* Displays second api countdown from 5 to 1sec when first api countdown is over and reached to zero. */}
                        {(this.state.isLoaded && this.state.dataLoadTime !== 0) && <div>Second APIs Data Loading...({this.state.dataLoadTime}sec)</div>}
                        {/* Displays the data into DOM using map once second api countdown reaches to zero. */}
                        {(this.state.dataLoadTime === 0) && this.state.students.map(student => (<div className='div-flex' key={student.email}><p className='rectanglebg'>Name: {student.name} {'&'} Email: {student.email}</p></div>))}
                    </div>
        )
    }
};
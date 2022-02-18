import React, { Component } from 'react';
import '../../Assets/Css/custom.css';
import LoadApi from './LoadApi';

export const UserContext = React.createContext({ callApi: (response) => response })

export default class AjaxFetchClassComp extends Component {

    constructor() {
        super();
        this.state = {
            error: '',
            isLoaded: false,
            isErrWaiting: false,
            resWaitTime: 5,
            dataLoadTime: 5,
            students: [],
        };
    }

    countDown(sec, errorTime) {
        if (this.state.error !== '' || !errorTime) {
            const intervalID = setInterval(() => {

                (--sec === 0) && this.setState({ isLoaded: true }, () => clearInterval(intervalID));

                errorTime ? this.setState({ resWaitTime: sec }) : this.setState({ dataLoadTime: sec })
            }, 1000);
        }
    }

    componentDidUpdate() {
        if (this.state.resWaitTime === 0) {
            this.setState({ error: '', resWaitTime: 5 });
            fetch("http://localhost:3001/studData")
                .then(response => response.json())
                .then(
                    (resData) => this.setState({ students: resData, isLoaded: true, error: '' }, () => this.countDown(this.state.dataLoadTime, false)),
                    (error) => this.setState({ error, isErrWaiting: false, students: ['Second'] }, () => this.countDown(this.state.resWaitTime, true))
                )
        }
    }

    showApiError = () => {
        this.setState({ isErrWaiting: true });
        fetch("http://localhost:301/studData")
            .then(response => response.json())
            .then(
                (resData) => this.setState({ students: resData, isLoaded: true, error: '' }, () => this.countDown(this.state.dataLoadTime, false)),
                (error) => this.setState({ error, isErrWaiting: false, students: ['First'] }, () => this.countDown(this.state.resWaitTime, true))
            )
    }


    render() {
        return (this.state.isErrWaiting) ? <div>Loading...</div> :
            (this.state.error !== '') ? <div>{this.state.students[0]} APIs Error: {this.state.error.message} (wait for {this.state.resWaitTime}sec to fetch data)</div> :
                <div>
                    <hr />
                    {console.log('What? ', this.state.error)}
                    <p className='topic-heading'>={'>'} AJAX and APIs calls using fetch() in Class Component.</p>

                    {(!this.state.isLoaded &&
                        <UserContext.Provider value={{ name: 'RJ', callApi: this.showApiError }}>
                            <LoadApi />
                        </UserContext.Provider>)}

                    {(this.state.isLoaded && this.state.dataLoadTime !== 0) && <div>Second APIs Data Loading...({this.state.dataLoadTime}sec)</div>}

                    {(this.state.dataLoadTime === 0) && this.state.students.map(student => (
                        <h2 className='innertag-flex' key={student.email}>
                            <p className='rectanglebg'>Name: {student.name} {'&'} Email: {student.email}</p>
                        </h2>
                    ))}
                </div>
    }
};

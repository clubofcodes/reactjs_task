import React, { Component } from 'react';
import '../../Assets/Css/custom.css';

export default class AjaxClassComp extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            students: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/studData")
            .then(response => response.json())
            .then((resData) => this.setState({ isLoaded: true, students: resData }), (error) => this.setState({ isLoaded: true, error }))
    }

    render() {
        return (this.state.error) ? <div>Error: {this.state.error.message}</div> :
            (!this.state.isLoaded) ? <div>Loading...</div> :
                <div>
                    <hr />
                    {'What? ', console.log(this.state.error)}
                    <p className='topic-heading'>={'>'} AJAX and APIs calls In Class Component. (See Logs)</p>
                    {this.state.students.map(student => (
                        <h2 className='innertag-flex' key={student.email}>
                            <p className='rectanglebg'>Name: {student.name} {'&'} Email: {student.email}</p>
                        </h2>
                    ))}
                </div>
    }
};

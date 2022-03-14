import React, { Component, createRef } from 'react'

export default class CreateRef extends Component {

    constructor(props) {
      super(props);
      this.emailRef = createRef();
      this.pwdRef = createRef();
      this.dataRef = createRef();
      this.state = {
         isData:false,
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.emailRef.current.value && this.pwdRef.current.value ? this.setState({isData:true}) : alert('All fields are mandatory!!');
        this.dataRef.current.style.color = 'tomato';
    }

    render() {
        return (
            <div>
                <p className='topic-heading'>={'>'} Getting Forms Value using createRef method.</p>
                <form className="text-start form-card innertagHook-flex" onSubmit={this.handleSubmit} noValidate>
                    <div className='innertag-flex'>
                        <label htmlFor="firstname">Email:</label>
                        <input type="text" className="ml-2" placeholder='Enter your email . . .' name='email' ref={this.emailRef} />
                    </div>

                    <div className='innertag-flex mt-3'>
                        <label htmlFor="firstname">Password:</label>
                        <input type="password" className="ml-2" placeholder='Enter your password . . .' name='password' ref={this.pwdRef} />
                    </div>

                    <div className='innertag-flex mt-3'>
                        <button type="submit" className="btn round btn-primary shadow-none">Signup</button>
                        <button type="reset" className="btn round btn-warning shadow-none" onClick={() => this.setState({isData:false})}>Reset</button>
                    </div>
                </form>
                {
                    this.state.isData && (
                        <div className="div-flex">
                            <p className="rectanglebg text-wrap w-25" ref={this.dataRef}>Email: {this.emailRef.current.value}</p>
                        </div>)
                }

            </div>)
    }
}

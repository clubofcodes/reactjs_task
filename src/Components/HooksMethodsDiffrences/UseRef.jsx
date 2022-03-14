import React, { useRef, useState } from 'react'

export const UseRef = () => {
    //it is like useState only and it's preserve the value. But never re-renders.
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const dataRef = useRef(null);

    const [isData, setIsData] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailRef.current.value && pwdRef.current.value ? setIsData(true) : alert('All fields are mandatory!!');
        dataRef.current.style.color = 'tomato';
    }

    return (
        <div>
            <p className='topic-heading'>={'>'} Getting Forms Value using useRef hook.</p>
            <form className="text-start form-card innertagHook-flex" onSubmit={handleSubmit} noValidate>
                <div className='innertag-flex'>
                    <label htmlFor="firstname">Email:</label>
                    <input type="text" className="ml-2" placeholder='Enter your email . . .' name='email' ref={emailRef} />
                </div>

                <div className='innertag-flex mt-3'>
                    <label htmlFor="firstname">Password:</label>
                    <input type="password" className="ml-2" placeholder='Enter your password . . .' name='password' ref={pwdRef} />
                </div>

                <div className='innertag-flex mt-3'>
                    <button type="submit" className="btn round btn-primary shadow-none">Signup</button>
                    <button type="reset" className="btn round btn-warning shadow-none" onClick={()=>setIsData(false)}>Reset</button>
                </div>
            </form>
            {
                isData && (
                    <div className="div-flex">
                        <p className="rectanglebg text-wrap w-25" ref={dataRef}>Email: {emailRef.current.value}</p>
                    </div>)
            }

        </div>
    )
}

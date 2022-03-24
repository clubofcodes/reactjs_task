import React, { forwardRef, useRef, useState } from 'react'

export const UseRef = forwardRef(({ showBtn }, ref) => {
    //it is like useState only and it's preserve the value. But never re-renders.
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const dataRef = useRef(null);
    const showEmail = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        (showBtn && (emailRef.current.value && pwdRef.current.value)) ? dataRef.current.className = "div-flex" : alert('All fields are mandatory!!')
        showEmail.current.style.color = 'tomato';
        showEmail.current.textContent = "Email: " + emailRef.current.value;
    }

    return (
        <div>
            {/* {console.log("Will not re-render")} */}
            {showBtn && <p className='topic-heading'>={'>'} Getting Forms Value using useRef hook.</p>}
            <form className="text-start form-card innertagHook-flex" onSubmit={handleSubmit} noValidate>
                <div className='innertag-flex'>
                    <label htmlFor="firstname">Email:</label>
                    <input type="text" className="ml-2" placeholder='Enter your email . . .' name='email' ref={showBtn ? emailRef : ref} />
                </div>

                {showBtn && <div className='innertag-flex mt-3'>
                    <label htmlFor="firstname">Password:</label>
                    <input type="password" className="ml-2" placeholder='Enter your password . . .' name='password' ref={pwdRef} />
                </div>}

                {showBtn && <div className='innertag-flex mt-3'>
                    <button type="submit" className="btn round btn-primary shadow-none">Signup</button>
                    <button type="reset" className="btn round btn-warning shadow-none" onClick={() => dataRef.current.className = "d-none"}>Reset</button>
                </div>}
            </form>
            {
                (showBtn) && (
                    <div className="div-flex d-none" ref={dataRef}>
                        <p className="rectanglebg text-wrap w-25" ref={showEmail}>Email:  Not Found</p>
                    </div>)
            }

        </div>
    )
})
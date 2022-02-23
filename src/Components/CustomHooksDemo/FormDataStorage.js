import { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useFormValidate from "../../Hooks/useFormValidate";

export default function FormDataStorage() {

    //De-structuring values returned from customHook. Can say pulling from customHook.
    const { formData, handleSubmit, errors, hideErrors } = useFormValidate();
    //Defined variable of custom hook to store form data in localStorage.
    const [storedLocalData, setLocalData, clearLocalStorage] = useLocalStorage('Users', []);

    //Storing form data to localStorage whenever formData is modified on submission.
    useEffect(() => setLocalData([...storedLocalData, ...formData]), [formData]);
    

    console.log(errors);
    return (
        <div>
            ={'>'} State Validation and store data in localStorage.
            {(JSON.stringify(errors) === '{}') && <p>Successfully stored data in localStorage.</p>}
            <form className="text-start form-card" onSubmit={handleSubmit} noValidate>
                <div className='form-group'>
                    <label htmlFor="firstname">Email:</label>
                    <input type="text" placeholder='Enter your email' name='email' />
                </div>
                <div className='col-md-6 offset-md-5'>{errors.emailErr && errors.emailErr}</div>

                <div className='form-group'>
                    <label htmlFor="firstname">Password:</label>
                    <input type="password" placeholder='Enter your password' name='password' />
                </div>
                <div className='col-md-6 offset-md-5'>{errors.passwordErr && errors.passwordErr}</div>

                <div className='form-btn-group'>
                    <button type="submit" className="btn round btn-primary btn-md">Store Data</button>
                    <button type="reset" className='btn round btn-warning btn-md' onClick={hideErrors}>Reset</button>
                    <button type="button" className="btn round btn-danger btn-md" onClick={clearLocalStorage}>Clear LocalStorage</button>
                </div>
            </form>
        </div>
    )
}



import { useEffect } from "react";
import '../Forms/FormikForm.css';
import useLocalStorage from "../../Hooks/useLocalStorage";
import useFormValidate from "../../Hooks/useFormValidate";

export default function FormDataStorage() {

    //De-structuring values returned from customHook. Can say pulling from customHook.
    const { formData, handleSubmit, errors, hideErrors, setFormData, isSignup } = useFormValidate();
    //Defined variable of custom hook to store form data in localStorage.
    const [storedLocalData, setLocalData, clearLocalStorage] = useLocalStorage('Users', []);

    //Storing form data to localStorage whenever formData is modified on submission.
    useEffect(() => setLocalData([...storedLocalData, ...formData]), [formData]);

    return (
        <div>
            <p className='topic-heading'>={'>'} State Validation and store form data in localStorage using sessionStorage.</p>
            {isSignup === 'No' && <p>User already registered!!</p>}
            {isSignup === 'Yes' && <p>Successfully registered {'&'} stored data in localStorage.</p>}
            <form className="text-start form-card innertagHook-flex" onSubmit={handleSubmit} noValidate>
                <div className='innertag-flex'>
                    <label htmlFor="firstname">Email:</label>
                    <input type="text" className="ml-2" placeholder='Enter your email . . .' name='email' />
                </div>
                <div className='offset-4 col-sm-6 offset-2 pl-2 error-tag mb-3'>{errors.emailErr && errors.emailErr}</div>

                <div className='innertag-flex'>
                    <label htmlFor="firstname">Password:</label>
                    <input type="password" className="ml-2" placeholder='Enter your password . . .' name='password' />
                </div>
                <div className='offset-4 col-sm-6 offset-2 pl-2 error-tag mb-3'>{errors.passwordErr && errors.passwordErr}</div>

                <div className='form-btn-group'>
                    <button type="submit" className="btn round btn-primary shadow-none">Signup</button>
                    <button type="reset" className="btn round btn-warning shadow-none" onClick={hideErrors}>Reset</button>
                    <button type="button" className="btn round btn-danger shadow-none ml-2" onClick={() => { clearLocalStorage(); setFormData([]) }}>Clear LocalStorage</button>
                </div>
            </form>
        </div>
    )
}



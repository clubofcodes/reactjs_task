import React, { useEffect, useState } from 'react';
import '../Components/Forms/FormikForm.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../Validations/SignupValSchema';
import { loginValidationSchema } from '../Validations/loginValidationSchema';
import useLocalStorage from '../Hooks/useLocalStorage';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../Utils/useAuthentication';
import { Buffer } from 'buffer';

export const LoginSignupForm = () => {
    const location = useLocation();
    //Getting props from NavLink attributes using useLocation state.
    const { fieldStyle, errStyle, btnText } = location.state;

    //To navigate to particular route/path.
    const navigate = useNavigate();

    // Custom hook to store logedIn user email to context.
    const userAuth = useAuthentication();

    //Hook form default methods for manipulating forms data.
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(btnText === "Sign Up" ? validationSchema : loginValidationSchema),
        mode: 'onSubmit', // when form submitted, shows errror. If 'all' than shows error for every change and blure events.
        reValidateMode: 'onChange' //first errors are shown on submit and than further errors will be shown when input is changed.
    });

    //New state to store form multiple input data in to array of objects.
    const [formData, setFormData] = useState([]);
    //Defined variable of custom hook to store form data in localStorage.
    const [storedLocalData, setLocalData] = useLocalStorage('JoinedUsers', []);
    //New state for displaying the msg for new user or already registered user in signupForm.
    const [isRegistered, setIsRegistered] = useState('New');
    //New state for displaying the particular msg for loginForm.
    const [isLogin, setIsLogin] = useState('New');

    //Function that returns normal string passed in params to encrypted string.
    const toEncrypt = (strValue) => Buffer.from(strValue).toString('base64');

    const onSubmit = (signupData) => {
        //Checks whether user has submitted data from LoginForm or SignupForm.
        if (btnText === "Sign Up") {
            // fetching keys from signupData object.
            const { email, username, password, cpassword, pnumber, city, state } = signupData;
            // storing object of encrypted values into new variable to pass into localstorage.
            const encryptedDataObj = { email: toEncrypt(email), username: toEncrypt(username), password: toEncrypt(password), cpassword: toEncrypt(cpassword), pnumber: toEncrypt(pnumber), city: toEncrypt(city), state: toEncrypt(state) }
            console.log('Joi leh encrypted data: ', encryptedDataObj);

            let isvalid = false;
            //To check localstorage has any data or not else store new data and reset input values.
            if (storedLocalData.length > 0) {
                // To verify that user exists in localSorage or not.
                storedLocalData.map(prevData => (prevData.email === toEncrypt(signupData.email)) && (isvalid = true))
                //If user exists then print particular msg using state value 'No' else other msg using 'Yes'.
                if (isvalid) setIsRegistered('No');
                else {
                    setIsRegistered('Yes'); //store Yes in state for signup successfully.
                    //User input value is stored in array of objects in formData state.
                    setFormData([...formData, encryptedDataObj]);
                    reset();
                }
            } else {
                setIsRegistered('Yes'); //store Yes in state for signup successfully.
                setFormData([...formData, encryptedDataObj]);
                reset(); //To reset inputs&errors when data submitted successfully and stored.
            }
        }
        // When LoginForm is used.
        else (storedLocalData.length > 0) ? storedLocalData.some(prevData => {
            //Will validate the user is already register then redirect to dashboard. 
            if (prevData.email === toEncrypt(signupData.email)) {
                userAuth.login(signupData.email); //sets email in state of global context.
                //navigates to dashboard if user is registerd.
                //replace true will help to avoid going back to login page from back button.
                //In first parameter it will remeber previous path. i.e., if user click on dashboard and then login's he will be redirected to dashboard else from other component it will go to 'or' condition that is will go to home path.
                navigate(location.state?.path || '/', { replace: true });
            }
            else setIsLogin('No') //To display msg that user is not registered.
        }) : setIsLogin('No'); ////To display msg that user is not registered when localstorage is empty.

        // alert(JSON.stringify(signupData, null, 2));
    };

    // Storing form data to localStorage whenever formData is modified on submission.
    useEffect(() => setLocalData([...storedLocalData, ...formData]), [formData]);

    // To reset inputs/errors and hide top messages when user submits form on changing login/register route.
    useEffect(() => { reset(); setIsRegistered('New'); setIsLogin('New') }, [btnText]);

    return (
        <div>
            <p className='topic-heading text-info' style={{ fontSize: 'x-large', fontWeight: '600' }}>{btnText === "Sign Up" ? "Register yourself with below details" : "Login with your credentials"}</p>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            {isRegistered === 'No' && <p>User already registered!!</p>}
            {isRegistered === 'Yes' && <p>Successfully registered {'&'} stored data in localStorage.</p>}
            {isLogin === 'No' && <p className='topic-heading text-danger' style={{ fontSize: 'large', fontWeight: '600' }}>User doesn't exist, go to <Link to="/register" state={{ fieldStyle: 'form-group', errStyle: 'offset-5 col-sm-7', btnText: 'Sign Up' }}>signup</Link> for registration.</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="text-start form-card">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input {...register("email")} />
                </div>
                <div className="offset-5 col-sm-7">{errors.email?.message}</div>

                <div className={fieldStyle}>
                    <label htmlFor="username">Username:</label>
                    <input {...register("username")} />
                </div>
                <div className={errStyle}>{errors.username?.message}</div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type='password' {...register("password")} />
                </div>
                <div className="offset-5 col-sm-7 pwd-err">{errors.password?.message}</div>

                <div className={fieldStyle}>
                    <label htmlFor="password">Confirm Password:</label>
                    <input type='password' {...register("cpassword")} />
                </div>
                <div className={errStyle}>{errors.cpassword?.message}</div>

                <div className={fieldStyle}>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input {...register("pnumber")} />
                </div>
                <div className={errStyle}>{errors.pnumber?.message}</div>

                <div className={fieldStyle}>
                    <label htmlFor="city">City:</label>
                    <input {...register("city")} />
                </div>
                <div className={errStyle}>{errors.city?.message}</div>

                <div className={fieldStyle}>
                    <label htmlFor="state">State:</label>
                    <input {...register("state")} />
                </div>
                <div className={errStyle}>{errors.state?.message}</div>

                <div className='form-btn-group mt-3'>
                    <button className='btn round btn-info shadow-none' type="submit">{btnText}</button>
                    <button className='btn round btn-danger shadow-none' type="reset" onClick={() => reset()}>Reset</button>
                </div>
            </form>
            <br />
        </div>
    )
}

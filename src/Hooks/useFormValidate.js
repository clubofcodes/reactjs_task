import { useEffect, useState } from "react";
import { useSessionStorage } from "./useSessionStorage";

export default function useFormValidate() {

    //New state for errors handling.
    const [errors, setErrors] = useState({ emailErr: '', passwordErr: '' });
    //New state to store form multiple input data in to array of objects.
    const [formData, setFormData] = useState([]);
    //New state to store logedIn user in SessionStorage.
    const [isSignup, setUserSignup] = useSessionStorage('isSignup', 'FirstTime');

    //This function is called when user submit form, stores form data into state and clears inputs.
    const handleSubmit = (e) => {
        //prevent the default behaviour of browser when submiting form and from refreshing the page.
        e.preventDefault();
        //Mult-Methods: to get user input value.
        // console.log('Method-1:', e.target[0].value, ' Method-2:', e.target.elements.email.value, ' Method-3:', e.target.email.value);

        //storing email and pwd input value into variables/fields in object. And Trimming any whitespace using trim() function.
        const formValues = { email: e.target.email.value.trim(), password: e.target.password.value.trim() }

        //Handling Errors on form submission.
        let emailErr = (!formValues.email) ? "*Email address is required" :
            (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,64})+$/.test(formValues.email))) &&
            "Invalid email address";
        let passwordErr = (!formValues.password) ? "*Password is required" :
            (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(formValues.password))) &&
            `Must Contain 8 Characters,One Uppercase, One Lowercase,One Number and one special case Character`;

        //Update error state with error values.
        setErrors({ emailErr, passwordErr });

        //If there is no error store the data in state and reset inputs.
        if (!emailErr && !passwordErr) {
            //New state to fetch data from localStorage.
            const storedLocalData = JSON.parse(window.localStorage.getItem('Users'));

            //Check whether user has already registered,else store data in state.
            if (storedLocalData.length > 0) {
                storedLocalData.map((prevData => {
                    if (prevData.email === formValues.email) setUserSignup('No'); //store in session storage for already registered.
                    else {
                        setUserSignup('Yes'); //store in session storage for signup successfully.
                        //User input value is stored in array of objects of state.
                        setFormData([...formData, { email: formValues.email, password: formValues.password }]);
                    }
                }));
            } else {
                //User input value is stored in array of objects of state.
                setFormData([...formData, { email: formValues.email, password: formValues.password }]);
                setUserSignup('Yes');
            }
            //Clearing inputs by setting value to null.
            e.target.email.value = e.target.password.value = '';
            setErrors({});
        }
    }

    //to hide the heading msg is registered or already a user.
    useEffect(() => {
        setUserSignup('FirstTime');
    }, []);

    //To hide errors for reset button.
    const hideErrors = () => setErrors({ emailErr: '', passwordErr: '' });

    return { formData, handleSubmit, errors, hideErrors, setFormData, isSignup };
}
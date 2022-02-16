import * as yup from "yup";

export const validationSchema = yup.object({
    firstName: yup.string()
        .required('*First name is required')
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .matches(/^[A-Za-z ]+$/i, 'Only Alphabets allowed'),
    lastName: yup.string()
        .required('*Last name is required')
        .matches(/^[A-Za-z ]{3,15}$/i, 'Only Alphabets allowed and 3 to 15 characters.'),
    email: yup.string()
        .required('*Email is required')
        .matches(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,64})+$/,
            "Invalid email address"
        ),
    password: yup.string()
        .required('*Password is required')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
            `Must Contain 8 Characters,
            One Uppercase, One Lowercase,
            One Number and one special case Character`
        ),
    cpassword: yup.string()
        .required('*Confirm Password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
}).required();
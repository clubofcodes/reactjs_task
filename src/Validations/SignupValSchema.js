import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup.string()
        .required('*Email is required')
        .matches(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,64})+$/,
            "Invalid email address"
        ),
    username: yup.string()
        .required('*Username is required')
        .matches(/^[A-Za-z0-9 ]{3,15}$/i, 'Minimum 3 to 15 characters and special characters not allowed.'),
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
    pnumber: yup.string()
        .required('*Phone number is required')
        .matches(
            /^[0]?(\+91)?[789]\d{9}$/,
            'Phone number is not valid and only 10 digits allowed.'
        ),
    city: yup.string()
        .required('*City is required'),
    state: yup.string()
        .required('*State is required'),
}).required();
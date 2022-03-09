import * as yup from "yup";

export const loginValidationSchema = yup.object({
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
}).required();
import React from 'react';
import './FormikForm.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationSchema = yup.object({
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
});

function HookForm() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => alert(JSON.stringify(data, null, 2));;
    console.log("First Name: ", watch("firstName")); //To get any input value.
    return (
        <div>
            ={'>'} React Form Using Hook Library
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)} className="text-start form-card">
                <div className='form-group'>
                    <label htmlFor="firstname">First Name:</label>
                    <input {...register("firstName")} />
                </div>
                <div className='col-md-6 offset-md-5'>
                    {errors.firstName?.message}
                </div>

                <div className='form-group'>
                    <label htmlFor="lastname">Last Name:</label>
                    <input {...register("lastName")} />
                </div>
                <div className='col-md-6 offset-md-5'>
                    {errors.lastName?.message}
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    {/* Without Yup validation */}
                    {/* <input {...register("email", {
                        required: {
                            value: true,
                            message: '*Email is required'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,64})+$/,
                            message: 'Invalid email address'
                        }
                    })} /> 
                    {errors.email && errors.email.message} */}
                    <input {...register("email")} />
                </div>
                <div className='col-md-6 offset-md-5'>
                    {errors.email?.message}
                </div>

                <div className='form-group'>
                    <label htmlFor="name">Password:</label>
                    <input {...register("password")} />
                </div>
                <div className='col-md-6 offset-md-5'>
                    <p className='pwd-err'>{errors.password?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="name">Confirm Password:</label>
                    <input {...register("cpassword")} />
                </div>
                <div className='col-md-6 offset-md-5'>
                    {errors.cpassword?.message}
                </div>

                <div className='form-btn-group'>
                    <button className='btn round btn-info btn-md' type="submit">
                        Submit
                    </button>
                    <button className='btn round btn-danger btn-md' type="button" onClick={() => reset()}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}

export default HookForm;
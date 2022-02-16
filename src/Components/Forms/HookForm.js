import React from 'react';
import './FormikForm.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../Validations/YupValSchema';

export default function HookForm() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
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
                <div className='col-md-6 offset-md-5'>{errors.firstName?.message}</div>

                <div className='form-group'>
                    <label htmlFor="lastname">Last Name:</label>
                    <input {...register("lastName")} />
                </div>
                <div className='col-md-6 offset-md-5'>{errors.lastName?.message}</div>

                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input {...register("email")} />
                </div>
                <div className='col-md-6 offset-md-5'>{errors.email?.message}</div>

                <div className='form-group'>
                    <label htmlFor="name">Password:</label>
                    <input type='password' {...register("password")} />
                </div>
                <div className='col-md-6 offset-md-5'><p className='pwd-err'>{errors.password?.message}</p></div>

                <div className='form-group'>
                    <label htmlFor="name">Confirm Password:</label>
                    <input type='password' {...register("cpassword")} />
                </div>
                <div className='col-md-6 offset-md-5'>{errors.cpassword?.message}</div>

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
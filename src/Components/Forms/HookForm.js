import React from 'react';
import './FormikForm.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../Validations/YupValSchema';

export default function HookForm() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onSubmit', // when form submitted, shows errror. If 'all' than shows error for every change and blure events.
        reValidateMode: 'onChange' //first errors are shown on submit and than further errors will be shown when input is changed.
    });
    const onSubmit = data => alert(JSON.stringify(data, null, 2));;
    console.log("First Name: ", watch("firstName")); //To get any input value.
    return (
        <div>
            <p className='topic-heading'>={'>'} React Form Using Hook Library</p>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)} className="text-start form-card">
                <div className='form-group'>
                    <label htmlFor="firstname">First Name:</label>
                    <input {...register("firstName")} />
                </div>
                <div className='offset-5 col-sm-7'>{errors.firstName?.message}</div>

                <div className='form-group'>
                    <label htmlFor="lastname">Last Name:</label>
                    <input {...register("lastName")} />
                </div>
                <div className='offset-5 col-sm-7'>{errors.lastName?.message}</div>

                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input {...register("email")} />
                </div>
                <div className='offset-5 col-sm-7'>{errors.email?.message}</div>

                <div className='form-group'>
                    <label htmlFor="name">Password:</label>
                    <input type='password' {...register("password")} />
                </div>
                <div className='offset-5 col-sm-7 pwd-err'>{errors.password?.message}</div>

                <div className='form-group'>
                    <label htmlFor="name">Confirm Password:</label>
                    <input type='password' {...register("cpassword")} />
                </div>
                <div className='offset-5 col-sm-7 mb-3'>{errors.cpassword?.message}</div>

                <div className='form-btn-group'>
                    <button className='btn round btn-info shadow-none' type="submit">Submit</button>
                    <button className='btn round btn-danger shadow-none' type="reset" onClick={() => reset()}>Reset</button>
                </div>
            </form>
            <br />
        </div>
    )
}
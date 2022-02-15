import React from 'react';
import './Form.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function Forms() {
    return (
        <div>
            <hr />
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', cpassword: '' }}

                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(3, 'Must be 3 characters or more')
                        .max(15, 'Must be 15 characters or less')
                        .required('*First name is Required'),
                    lastName: Yup.string()
                        .min(3, 'Must be 3 characters or more')
                        .max(15, 'Must be 15 characters or less')
                        .required('*Last name is Required'),
                    email: Yup.string()
                        .required('*Email is required')
                        .email('Invalid email address')
                        .matches(
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,64})+$/,
                            "Invalid email address"
                        ),
                    password: Yup.string()
                        .required('*Password is required')
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&-])[A-Za-z\d@$!%*#?&-]{8,}$/,
                            `Must Contain 8 Characters,
                            One Uppercase, One Lowercase,
                            One Number and one special case Character`
                        ),
                    cpassword: Yup.string()
                        .required('*Confirm Password is required')
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')

                })}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='text-start head'>
                        <div className='form-group'>
                            <label htmlFor="firstName">First Name: </label>
                            <Field type="text" name="firstName" />
                        </div>
                        <div className='col-md-6 offset-md-5'>
                            <ErrorMessage name="firstName" component="div" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name: </label>
                            <Field type="text" name="lastName" />
                        </div>
                        <div className='col-md-6 offset-md-5'>
                            <ErrorMessage name="lastName" component="div" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">Email: </label>
                            <Field type="text" name="email" />
                        </div>
                        <div className='col-md-6 offset-md-5'>
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">Password: </label>
                            <Field type="password" name="password" />
                        </div>
                        <div className='col-md-6 offset-md-5'>
                            <ErrorMessage className='pwd-err' name="password" component="div" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="confrimPassword">Confirm Password: </label>
                            <Field type="password" name="cpassword" />
                        </div>
                        <div className='col-md-6 offset-md-5'>
                            <ErrorMessage className='pwd-err' name="cpassword" component="div" />
                        </div>

                        <div className='form-btn-group'>
                            <button className='btn round btn-info btn-md' type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            <button className='btn round btn-danger btn-md' type="reset">
                                Reset
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div >
    )
}

export default Forms;
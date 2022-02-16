import React from 'react';
import './FormikForm.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from '../../Validations/YupValSchema';

export default function FormikForm() {
    return (
        <div>
            <hr />
            ={'>'} React Form Using Formik Library
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', cpassword: '' }}

                validationSchema = {validationSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='text-start form-card'>
                        <div className='form-group'>
                            <label htmlFor="firstName">First Name: </label>
                            <Field type="text" name="firstName" />
                        </div>
                        <div className='col-md-6 offset-md-5'><ErrorMessage name="firstName" component="div" /></div>

                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name: </label>
                            <Field type="text" name="lastName" />
                        </div>
                        <div className='col-md-6 offset-md-5'><ErrorMessage name="lastName" component="div" /></div>

                        <div className='form-group'>
                            <label htmlFor="email">Email: </label>
                            <Field type="text" name="email" />
                        </div>
                        <div className='col-md-6 offset-md-5'><ErrorMessage name="email" component="div" /></div>

                        <div className='form-group'>
                            <label htmlFor="password">Password: </label>
                            <Field type="password" name="password" />
                        </div>
                        <div className='col-md-6 offset-md-5'><ErrorMessage className='pwd-err' name="password" component="div" /></div>

                        <div className='form-group'>
                            <label htmlFor="confrimPassword">Confirm Password: </label>
                            <Field type="password" name="cpassword" />
                        </div>
                        <div className='col-md-6 offset-md-5'><ErrorMessage className='pwd-err' name="cpassword" component="div" /></div>

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
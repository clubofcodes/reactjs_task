import React from 'react';
import './FormikForm.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from '../../Validations/YupValSchema';

export default function FormikForm() {
    return (
        <div>
            <hr />
            <p className='topic-heading'>={'>'} React Form Using Formik Library</p>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', cpassword: '' }}

                validationSchema={validationSchema}

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
                        <div className='offset-5 col-sm-7'><ErrorMessage name="firstName" /></div>

                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name: </label>
                            <Field type="text" name="lastName" />
                        </div>
                        <div className='offset-5 col-sm-7'><ErrorMessage name="lastName" /></div>

                        <div className='form-group'>
                            <label htmlFor="email">Email: </label>
                            <Field type="text" name="email" />
                        </div>
                        <div className='offset-5 col-sm-7'><ErrorMessage name="email" /></div>

                        <div className='form-group'>
                            <label htmlFor="password">Password: </label>
                            <Field type="password" name="password" />
                        </div>
                        <div className='offset-5 col-sm-7 pwd-err'><ErrorMessage name="password" /></div>

                        <div className='form-group'>
                            <label htmlFor="confrimPassword">Confirm Password: </label>
                            <Field type="password" name="cpassword" />
                        </div>
                        <div className='offset-5 col-sm-7 mb-3'><ErrorMessage className='pwd-err' name="cpassword" /></div>

                        <div className='form-btn-group'>
                            <button className='btn round btn-info shadow-none' type="submit" disabled={isSubmitting}>Submit</button>
                            <button className='btn round btn-danger shadow-none' type="reset">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div >
    )
}
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div className='row relative max-w-xl mx-auto responsive justify-content-center my-4'>
    <div className='col-md-10'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Please, enter Email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Please, enter Password';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group my-2 text-white">
              <label for="formEmail">User:</label>
              <Field className="form-control my-2" type="email" name="email" />
            </div>
            <ErrorMessage name="email" component="div" className='msjError' />
            <div className="form-group my-4 text-white">
              <label for="formPass">Password:</label>
              <Field className="form-control my-2" type="password" name="password" />
            </div>
            <ErrorMessage name="password" component="div" className='msjError' />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-outline-success my-2" type="submit" disabled={isSubmitting}>
                Log In
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default Basic;
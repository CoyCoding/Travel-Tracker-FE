import React from 'react';
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../actions/authActions';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const signUpValues = {
  username: '',
  email: '',
  password: '',
};

const SignUpForm = (props) => {
  const submit = (user) => {
    props.signup(user)
  }
  return (
    <div>
      <h1>Signup</h1>
      {props.error ? <p>{props.error}</p> : null}
      <Formik
        initialValues={signUpValues}
        validationSchema={SignupSchema}
        onSubmit={(values)=> submit(values)}>
        {({ errors, touched }) => (
          <Form>
            <Field name="username" placeholder="username"/>
            {errors.username && touched.username ? <div>{errors.username}</div> : null}
            <Field name="email" type="email" placeholder="email"/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="password"/>
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => {
  return state.auth;
};

export default connect(
    mapStateToProps,
    {signup}
)(SignUpForm);
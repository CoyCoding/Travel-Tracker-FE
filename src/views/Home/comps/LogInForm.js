import React from 'react';
import ErrorText from './ErrorText';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { login } from '../../../actions/authActions';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const signUpValues = {
  email: '',
  password: '',
};

const LogInForm = (props) => {

  const submit = (user) => {
    props.login(user);
  }

  return (
    <div>
      <h1>Log In</h1>
      <ErrorText error={props.auth.error}/>
      <FormWrapper submit={submit} attemptingLogIn={props.auth.attemptingLogIn}/>
      <p>Don't have an acount
        <span onClick={()=>{ props.push('/SignUp') }}>sign up</span>
      </p>
    </div>
  )
}

const FormWrapper = (props) => {
  return (
    <Formik
      initialValues={signUpValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => props.submit(values)}>
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" placeholder="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="password" placeholder="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <button type="submit" disabled={props.attemptingLogIn}> Submit</button>
        </Form>
      )}
    </Formik>
  )
}


const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps, {login})(LogInForm);
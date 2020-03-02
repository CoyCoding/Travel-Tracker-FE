import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addLocation } from '../../../actions/locationActions';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  longitude: Yup.number()
    .required('Required'),
  latitude: Yup.number()
    .required('Required'),
});

const markerValues = {
  title: '',
  longitude: '',
  latitude: '',
};

const MarkerForm = (props) => {

  const submit = (user) => {
    props.signup(user)
  }

  return (
    <div>
      <h1>Edit location:</h1>
      <FormWrapper submit={submit} attemptingLogIn={false}/>
    </div>
  )
}

const FormWrapper = (props) => {
  return(
    <Formik
      initialValues={markerValues}
      validationSchema={SignupSchema}
      onSubmit={(values)=> console.log(values)}>
      {({ errors, touched }) => (
        <Form>
          <Field name="title" type="text" placeholder="title" onKeyUp={(e)=>{console.log(e.target.value)}}/>
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
          <Field name="longitude" type="text" placeholder="longitude" />
          {errors.longitude && touched.longitude ? <div>{errors.longitude}</div> : null}
          <Field name="latitude" type="text" placeholder="latitude"/>
          {errors.latitude && touched.latitude ? <div>{errors.latitude}</div> : null}
          <button type="submit">Cancel</button>
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  )
}


const mapStateToProps = state => ({location: state.location, user_id: state.user.id});

export default connect(
    mapStateToProps,
)(MarkerForm);
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addLocation } from '../../../actions/locationActions';
import { moveLocation } from '../../../actions/locationActions';

const SignupSchema = Yup.object().shape({
  title: Yup.string(),
  longitude: Yup.number()
    .required('Required'),
  latitude: Yup.number()
    .required('Required'),
});

const MarkerForm = (props) => {

  const submit = (user) => {
    props.signup(user)
  }

  const updateMarkerState = (location) => {
    props.moveLocation(location)
  }

  return (
    <div>
      <h1>Edit location:</h1>
      <FormWrapper
        markerValues={props.location.location}
        submit={submit}
        updateMarkerState={updateMarkerState}
      />
    </div>
  )
}

const FormWrapper = (props) => {
  const [location, setLocation] = useState(props.markerValues)

  useEffect(()=>{
    // When the markerValues (Redux State) change update the location.
    console.log(location)
    setLocation(props.markerValues)
  }, [props.markerValues])

  const updateLocation = (target, obj) => {
    if(target.name === 'longitude' || target.name === 'latitude'){
      const numValue = Number(target.value);
      if(isNaN(numValue)){
        console.log(numValue)
          return;
      }
      //setLocation({...location, [target.name]: numValue})
      props.updateMarkerState({...location, [target.name]: numValue})
    }else{
      //setLocation({...location, [target.name]: target.value})
      props.updateMarkerState({...location, [target.name]: target.value})
    }
  }

  return(
    <form
      onSubmit={(values)=> console.log(values)}>
          <input
            name="title"
            placeholder="title"
            type="text"
            onChange={(e)=>{updateLocation(e.target)}}
            value={location.title}
          />

          <input
            name="longitude"
            type="text"
            placeholder="longitude"
            onChange={(e)=>{updateLocation(e.target)}}
            value={location.longitude}
          />

          <input
            name="latitude"
            type="text"
            placeholder="latitude"
            onChange={(e)=>{updateLocation(e.target)}}
            value={location.latitude}
          />

          <button type="submit">Cancel</button>
          <button type="submit">Save</button>
        </form>
  )
}


const mapStateToProps = state => ({location: state.location, user_id: state.user.id});

export default connect(
    mapStateToProps,
    { moveLocation }
)(MarkerForm);
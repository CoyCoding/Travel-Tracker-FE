import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FormWrapper from './FormWrapper';
import { addLocation } from '../../../actions/locationActions';
import { moveLocation } from '../../../actions/locationActions';

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

const mapStateToProps = state => ({location: state.location, user_id: state.user.id});

export default connect(
    mapStateToProps,
    { moveLocation }
)(MarkerForm);
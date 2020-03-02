import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Marker} from 'react-map-gl';
import LocationIcon from '../data/LocationIcon';

function AddLocation(props) {
  const [position, setPosition] = useState(props.startingPos);
  const initMarkerState = {
    draggable: true,
  }

  return (
    <>
      <Marker {...position} {...initMarkerState} offsetLeft={-8} offsetTop={-8} >
          <LocationIcon />
      </Marker>
    </>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
)(AddLocation);
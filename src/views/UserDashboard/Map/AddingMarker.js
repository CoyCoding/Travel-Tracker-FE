import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Marker, Popup} from 'react-map-gl';
import LocationIcon from './data/LocationIcon';
import MarkerWrapper from './MarkerWrapper';

function AddingMarkers(props) {
  const [showPopup, setShowPopup] = useState({});
  const user = props.user;

  const togglePopUp = (id, state) => {
    setShowPopup({
      [id]: state
    })
  }

  const placement = {
    latitude: 20,
    longitude: -90
  };

  const initMarkerState = {
    draggable: true,
  }

  return (
    <>
      {props.location.movingMarker
        ? <Marker {...placement} {...initMarkerState} offsetLeft={-8} offsetTop={-8} >
          <LocationIcon />
        </Marker>
        : null
      }
    </>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
)(AddingMarkers);
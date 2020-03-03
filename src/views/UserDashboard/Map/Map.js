import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';
import AllLocations from './AllLocations/AllLocations';
import AddLocation from './AddLocation/AddLocation';
import { moveViewport } from '../../../actions/locationActions';


const TOKEN = 

function Map(props) {
  const _onViewportChange = (viewport) => {
    props.moveViewport(viewport)
  }

  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN} {...props.location.viewport} onViewportChange={_onViewportChange} mapStyle={ 'mapbox://styles/fluffytoycoy/ck76ur81x5esc1ink2fr223wd'}>
      {props.location.movingMarker ? <AddLocation /> : <AllLocations />}
    </ReactMapGL>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
    { moveViewport }
)(Map);
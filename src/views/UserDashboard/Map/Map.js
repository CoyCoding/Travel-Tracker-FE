import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';
import AllLocations from './AllLocations/AllLocations';
import AddLocation from './AddLocation/AddLocation';


const TOKEN = 'p';

function Map(props) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 38.7577,
    longitude: -90.4376,
    zoom: 2
  });

  const _onViewportChange = (viewport) => {
    setViewport(viewport)
  }

  const initLocation = {
     latitude: viewport.latitude, longitude: viewport.longitude
  }

  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN} {...viewport} onViewportChange={_onViewportChange} mapStyle={ 'mapbox://styles/fluffytoycoy/ck76ur81x5esc1ink2fr223wd'}>
      {props.location.movingMarker ? <AddLocation startingPos={initLocation} /> : <AllLocations />}
    </ReactMapGL>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
)(Map);
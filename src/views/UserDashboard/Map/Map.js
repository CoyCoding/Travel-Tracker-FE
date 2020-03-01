import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import LocationIcon from './data/LocationIcon';
import Markers from './Markers';
import AddingMarker from './AddingMarker';

const TOKEN = '';

function Map() {
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


  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN} {...viewport} onViewportChange={_onViewportChange} mapStyle={ 'mapbox://styles/fluffytoycoy/ck76ur81x5esc1ink2fr223wd'}>
      <AddingMarker startingPos={{latitude: viewport.latitude, longitude: viewport.longitude}}/>
    </ReactMapGL>
  );
}

export default Map;
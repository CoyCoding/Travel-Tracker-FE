import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import LocationIcon from './data/LocationIcon';
import Markers from './Markers';

const TOKEN = 'pk.eyJ1IjoiZmx1ZmZ5dG95Y295IiwiYSI6ImNrNzIwcWd0MjBiOXczb253OWpneXJpb2kifQ.WsxTXH54_UnRveYVwN6gNQ';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 38.7577,
    longitude: -90.4376,
    zoom: 8
  });
  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN} {...viewport} onViewportChange={setViewport} mapStyle={ 'mapbox://styles/mapbox/streets-v11'}>
      <Markers/>
    </ReactMapGL>
  );
}

export default Map;
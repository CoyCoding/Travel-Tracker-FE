import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiZmx1ZmZ5dG95Y295IiwiYSI6ImNrNzIfQ.WsxTXH54_UnRveYVwN6gNQ';

function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
}

export default Map;
import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import LocationIcon from './data/LocationIcon';
const TOKEN = 'pk.eyNQ';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 38.7577,
    longitude: -90.4376,
    zoom: 8
  });
  const [showPopup, togglePopup] = useState(true);
  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN} {...viewport} onViewportChange={setViewport}>
      <Marker latitude={38.78} longitude={-90.41} offsetLeft={-8} offsetTop={-8} >
        <LocationIcon onClick={()=> togglePopup(true)}/>
      </Marker>
      {showPopup && <Popup
      latitude={38.78}
      longitude={-90.41}
      offsetTop={-2}
      offsetLeft={8}
      closeButton={true}
      closeOnClick={false}
      captureScroll={true}
      onClose={() => togglePopup(!showPopup)}
      anchor="left" >
      <div>You are here</div>
      <p>More stuff</p>
      <p>More stuff</p>
      <p>More stuff</p>
      </Popup>}
    </ReactMapGL>
  );
}

export default Map;
import React from 'react';
import {Marker, Popup} from 'react-map-gl';
import LocationIcon from '../../../../comps/Map/LocationIcon';

const popupSettings = {
  closeButton: true,
  closeOnClick: false,
  captureScroll: true,
  anchor:"left"
}

const MarkerWrapper = (props) => {

  return (
    <>
    <Marker key={props.location._id} {...props.placement} offsetLeft={-8} offsetTop={-8} >
      <LocationIcon className={'stationary'} onClick={()=> props.togglePopUp(props.location._id, true)}/>
    </Marker>
    {props.showPopup[ props.location._id] && <Popup
    {...popupSettings}
    { ...props.placement}
    offsetTop={-2}
    offsetLeft={8}
    onClose={() =>  props.togglePopUp(props.location._id, false)}>
      <div>
        <h3>{props.location.title}</h3>
        <p>{props.location.description}</p>
        <p>{props.username}</p>
      </div>
    </Popup>}
    </>
  )
}

export default MarkerWrapper;
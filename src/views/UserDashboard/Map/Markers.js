import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Marker, Popup} from 'react-map-gl';
import LocationIcon from './data/LocationIcon';

function Markers(props) {
  const [showPopup, setShowPopup] = useState({});
  const user = props.user.info;
  const popupSettings = {
    closeButton: true,
    closeOnClick: false,
    captureScroll: true,
    anchor:"left"
  }

  const togglePopUp = (id, state) => {
    setShowPopup({
      [id]: state
    })
  }

  return (
    <>
      {user ? user.locations.map((location, i) => {
        console.log(location);
        const placement = {
          latitude: location.latitude,
          longitude: location.longitude
        };

        return  (
          <>
          <Marker key={location._id} {...placement} offsetLeft={-8} offsetTop={-8} >
            <LocationIcon onClick={()=> togglePopUp(location._id, true)}/>
          </Marker>
          {showPopup[location._id] && <Popup
          {...popupSettings}
          { ...placement}
          offsetTop={-2}
          offsetLeft={8}
          onClose={() => togglePopUp(location._id, false)}>
          <p>You are here</p>
          <p>More stuff</p>
          <p>More stuff</p>
          <p>More stuff</p>
          </Popup>}
          </>
        )
      })
      : null}
    </>
  );
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps
)(Markers);
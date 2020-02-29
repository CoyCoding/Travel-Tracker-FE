import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Marker, Popup} from 'react-map-gl';
import LocationIcon from './data/LocationIcon';
import MarkerWrapper from './MarkerWrapper';

function Markers(props) {
  const [showPopup, setShowPopup] = useState({});
  const user = props.user;

  const togglePopUp = (id, state) => {
    setShowPopup({
      [id]: state
    })
  }

  const renderMarkersFor = (user) => {
    return user.locations.map((location, i) => {
      const placement = {
        latitude: location.latitude,
        longitude: location.longitude
      };

      return  (
        <MarkerWrapper
        location={location}
        showPopup={showPopup}
        togglePopUp={togglePopUp}
        placement={placement}
        username={user.username}/>
      )
  });
}

  return (
    <>
      {user.locations.length > 0 ? renderMarkersFor(user) : null}
    </>
  );
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps
)(Markers);
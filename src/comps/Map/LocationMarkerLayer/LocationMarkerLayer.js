import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MarkerWrapper from './MarkerWrapper';


function LocationMarkerLayer(props) {
  const [showPopup, setShowPopup] = useState({});
  const [currentUser, setCurrentLocations] = useState(props.currentUser);

  useEffect(()=>{
    setCurrentLocations(props.currentUser)
  },[props.currentUser])

  const togglePopUp = (id, state) => {
    setShowPopup({
      [id]: state
    })
  }

  const renderMarkers = () => {
    return currentUser.locations.map((location, i) => {
      const placement = {
        latitude: location.latitude,
        longitude: location.longitude
      };
      console.log(location)
      return  (
        <MarkerWrapper
        location={location}
        showPopup={showPopup}
        togglePopUp={togglePopUp}
        placement={placement}
        username={location.user}/>
      )
    });
  }

  return (
    <>
      {currentUser.locations.length > 0 ? renderMarkers() : null}
    </>
  );
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps
)(LocationMarkerLayer);
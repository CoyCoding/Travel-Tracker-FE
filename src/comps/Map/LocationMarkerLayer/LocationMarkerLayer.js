import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MarkerWrapper from './MarkerWrapper';


function LocationMarkerLayer(props) {
  const [shouldFilter] = useState(props.filter);
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
      if(shouldFilter){
        console.log(props.filters)
        if(props.filters[location.user]){
          return null
        }
      }
      const placement = {
        latitude: location.latitude,
        longitude: location.longitude
      };

      return  (
        <MarkerWrapper
        key={location._id}
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

const mapStateToProps = state => ({ user: state.user, filters: state.filters})
export default connect(
    mapStateToProps
)(LocationMarkerLayer);
import React, { useEffect } from 'react';
import Map from '../../comps/Map/Map';
import MarkerForm from './MarkerForm/MarkerForm';
import LocationMarkerLayer from '../../comps/Map/LocationMarkerLayer/LocationMarkerLayer';
import AddLocation from './Markers/AddLocation/AddLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { addMarker } from '../../store/actions/locationActions';
import './CurrentUserDashboard.scss';

const CurrentUserDashboard = (props) => {
  return (
    <>
      {
        props.user.info
        ? <div className="user-dash">
            <div className="sidebar">
              <div className="current-user-title">
                <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
                <h3>{props.user.info.username}</h3>
                <FontAwesomeIcon icon={faCog}/>
              </div>
            </div>
            <Map>
                {props.location.movingMarker ? <AddLocation /> : <LocationMarkerLayer filter currentUser={props.user}/>}
            </Map>
            <div className="sidebar">
              <div onClick={props.addMarker}>
                add new location
              </div>
              <MarkerForm/>
            </div>
          </div>
        : null
      }
    </>
  )
}

const mapStateToProps = state => ({ user: state.user, location: state.location})
export default connect(
    mapStateToProps,
    { addMarker }
)(CurrentUserDashboard);
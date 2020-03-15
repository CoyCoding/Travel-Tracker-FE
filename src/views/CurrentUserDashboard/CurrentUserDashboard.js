import React, { useEffect } from 'react';
import Map from '../../comps/Map/Map';
import MarkerForm from './MarkerForm/MarkerForm';
import LocationMarkerLayer from '../../comps/Map/LocationMarkerLayer/LocationMarkerLayer';
import AddLocation from './Markers/AddLocation/AddLocation';
import FollowingList from './FollowingList/FollowingList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { addMarker } from '../../store/actions/locationActions';
import './CurrentUserDashboard.scss';

const CurrentUserDashboard = (props) => {

  return (
    <>
      {
        props.user.info &&
         <div className="user-dash">
            <div className="sidebar">
              <div className="current-user-title">
                <div className="img-wrapper">
                  <img width="36" height="36" className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
                </div>
                <h3>{props.user.info.username}</h3>
                <FontAwesomeIcon icon={faCog}/>
              </div>
              <FollowingList/>
              <div className='add-marker-btn'>Add Marker</div>
            </div>
            <Map>
                {props.location.movingMarker ? <AddLocation /> : <LocationMarkerLayer filter currentUser={props.user}/>}
            </Map>
          </div>
      }
    </>
  )
}

const mapStateToProps = state => ({ user: state.user, location: state.location})
export default connect(
    mapStateToProps,
    { addMarker }
)(CurrentUserDashboard);
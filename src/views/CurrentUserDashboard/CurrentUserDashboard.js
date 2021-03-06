import React, { useEffect } from 'react';
import Map from '../../comps/Map/Map';
import MarkerForm from './MarkerForm/MarkerForm';
import LocationMarkerLayer from '../../comps/Map/LocationMarkerLayer/LocationMarkerLayer';
import AddLocation from './Markers/AddLocation/AddLocation';
import FollowingList from './FollowingList/FollowingList';
import ShrinkIcon from '../../comps/Icons/ShrinkIcon'
import LocationIcon from '../../comps/Icons/LocationIcon'
import { connect } from 'react-redux';
import { addMarker } from '../../store/actions/locationActions';
import './CurrentUserDashboard.scss';

const CurrentUserDashboard = (props) => {
  console.log(props.history)
  return (
    <>
      {
        props.user.info &&
         <div className="user-dash">
            <div className="sidebar">
              <div className="current-user-title">
                <div className="img-wrapper">
                </div>
                <h3>FOLLOWED USERS</h3>
                <ShrinkIcon className="arrow"/>
              </div>
              <FollowingList history={props.history}/>
              <div className='add-marker-bar'>
                <div className="add-marker-btn">
                  <h3>Add Marker</h3>
                  <LocationIcon className="icon"/>
                </div>
              </div>
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
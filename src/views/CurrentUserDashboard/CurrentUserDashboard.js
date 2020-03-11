import React, { useEffect } from 'react';
import Map from './Map/Map';
import MarkerForm from './MarkerForm/MarkerForm';
import AllLocations from './Map/AllLocations/AllLocations';
import AddLocation from './Map/AddLocation/AddLocation';
import { connect } from 'react-redux';
import { addMarker } from '../../store/actions/locationActions';
import './CurrentUserDashboard.scss';

const CurrentUserDashboard = (props) => {
  return (
    <>
      {
        props.user
        ? <div className="user-dash">
            <div className="sidebar">
            </div>
            <div className="map platformed">
              <Map>
                {props.location.movingMarker ? <AddLocation /> : <AllLocations />}
              </Map>
            </div>
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
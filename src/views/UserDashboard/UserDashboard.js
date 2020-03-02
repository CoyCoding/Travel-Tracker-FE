import React, { useEffect } from 'react';
import Map from './Map/Map';
import MarkerForm from './MarkerForm/MarkerForm';
import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/userActions';
import { addLocation } from '../../actions/locationActions';
import './UserDashboard.scss';

const UserDashboard = (props) => {
  const useEffectOnce = (fn) => useEffect(fn, []);

  useEffectOnce(()=>{
    if(!props.user.info){
      props.getUserInfo();
    }
  });

  return (
    <div className="user-dash">
      <div className="sidebar">
        <div onClick={props.addLocation}>
        add location
        </div>
      </div>
      <div className="map platformed">
        <Map />
      </div>
      <div className="sidebar">
        <div onClick={props.addLocation}>
          add new location
        </div>
        <MarkerForm/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
    { getUserInfo, addLocation }
)(UserDashboard);
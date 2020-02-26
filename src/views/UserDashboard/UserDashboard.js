import React, { useEffect } from 'react';
import Map from './Map/Map';
import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/userActions';
import './UserDashboard.scss';

const UserDashboard = (props) => {
  const useEffectOnce = (fn) => useEffect(fn, []);

  useEffectOnce(()=>{
    if(!props.user){
      props.getUserInfo();
    }
  });

  console.log(props)
  return (
    <div className="user-dash">
      <div className="sidebar">
      </div>
      <div className="map platformed">
        <Map />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
    { getUserInfo }
)(UserDashboard);
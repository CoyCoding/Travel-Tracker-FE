import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/userActions';
import './UserDashboard.scss';

const UserDashboard = (props) => {
  useEffect(()=>{
    props.getUserInfo();
    console.log(props.user)
  },[]);
  console.log(props)
  return (
    <div className="user-dash">
      <div className="sidebar">
      </div>
      <div className="map platformed">
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
    { getUserInfo }
)(UserDashboard);
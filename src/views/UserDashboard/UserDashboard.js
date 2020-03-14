import React, { useEffect, useState } from 'react';
import UserMap from './UserMap/UserMap';
import { connect } from 'react-redux';
import './UserDashboard.scss';

const UserDashboard = (props) => {

  return (
    <div className="user-dash">
      <div className="sidebar">
      </div>
        { props.user.info ? <UserMap {...props}/> : null }
      <div className="sidebar">
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
)(UserDashboard);
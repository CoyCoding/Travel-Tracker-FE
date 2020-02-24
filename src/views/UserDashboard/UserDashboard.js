import React from 'react';
import { connect } from 'react-redux';

const UserDashboard = (props) => {
  console.log(props)
  return (
    <>
      <p>Is this user logged in? {props.isLoggedIn.toString()}</p>
    </>
  )
}

const mapStateToProps = state =>{
  return state.auth;
}
export default connect(
    mapStateToProps,
)(UserDashboard);
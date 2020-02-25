import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/userActions';

const UserDashboard = (props) => {
  useEffect(()=>{
    console.log(props.user)
    props.getUserInfo();
  }, []);
  console.log(props)
  return (
    <>
      <p>Is this user logged in?</p>
    </>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
    { getUserInfo }
)(UserDashboard);
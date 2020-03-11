import React, { useEffect } from 'react';
import Map from './Map/Map';
import MarkerForm from './MarkerForm/MarkerForm';
import { connect } from 'react-redux';
import { getUserInfo } from '../../store/actions/userActions';
import { addMarker } from '../../store/actions/locationActions';
import './CurrentUserDashboard.scss';

const CurrentUserDashboard = (props) => {

  const getCurrentUserInfo = () =>{
    if(!props.user.info){
      props.getUserInfo();
    }
  }

  useEffect(()=>{
    let username = props.match.params.username;
    getCurrentUserInfo();
    if(username){
      username = username.replace(/_/gi, " ");
      console.log(username)
    }
  }, [])

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
        <div onClick={props.addMarker}>
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
    { getUserInfo, addMarker }
)(CurrentUserDashboard);
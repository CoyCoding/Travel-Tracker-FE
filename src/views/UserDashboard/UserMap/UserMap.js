import React, { useEffect } from 'react';
import Map from '../../../comps/Map/Map';
import LocationMarkerLayer from '../../../comps/Map/LocationMarkerLayer/LocationMarkerLayer';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../store/actions/userActions';
import { addMarker } from '../../../store/actions/locationActions';

const UserMap = (props) => {

  useEffect(()=>{
    const usernameParam = props.match.params.username.replace(/_/g, ' ');
    const currentUser = props.user.info.username;
    const history = props.history
    if(usernameParam === currentUser){
      history.push('/Home');
    } else {
      props.getUserInfo({username: usernameParam}, history)
    }
  },[])

  return (
      <>
        <Map>
          {props.user.selectedUser ? <LocationMarkerLayer currentUser={props.user.selectedUser}/> : null }
        </Map>
      </>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
    { getUserInfo, addMarker }
)(UserMap);
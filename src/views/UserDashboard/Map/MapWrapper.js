import React, { useEffect, useState } from 'react';
import Map from './Map';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../store/actions/userActions';
import { addMarker } from '../../../store/actions/locationActions';

const MapWrapper = (props) => {
  const [isUserDataLoaded, setDataLoaded] = useState(false);



  return (
      <>
        <Map>
          <div onClick={()=>{props.getUserInfo({username: props.match.params.username})}}>click</div>
          {isUserDataLoaded ? 'props.user.selectedUser.username' : null}
        </Map>
      </>
  )
}

const mapStateToProps = state => ({ user: state.user})
export default connect(
    mapStateToProps,
    { getUserInfo, addMarker }
)(MapWrapper);
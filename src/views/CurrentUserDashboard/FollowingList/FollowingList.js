import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { setFilters } from '../../../store/actions/markerFilterActions';
import { Scrollbars } from 'react-custom-scrollbars';

import './FollowingList.scss';

const FollowingList = (props) => {

  const setFilters = (user) => {
    const togglePos = !props.filters[user.username];
    props.setFilters({...props.filters, [user.username]: togglePos});
  }

  const renderFollowingList = () => {
    return props.user.info.following.map((followingUser) => {
      return (
        <>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="following-user">
          <div className="img-wrapper">
            <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
          </div>
          <h4>{followingUser.username}</h4>
          <div onClick={() => {setFilters(followingUser)}}>toggle</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        </>
      )
    });
  }

  return (
    <>
      {
        <Scrollbars autoHeight className='scroll-container-wrapper'>
          {props.user.info && renderFollowingList()}
        </Scrollbars>
      }
    </>
  )
}

const mapStateToProps = state => ({ user: state.user, location: state.location, ...state.filters})
export default connect(
    mapStateToProps,
    { setFilters }
)(FollowingList);
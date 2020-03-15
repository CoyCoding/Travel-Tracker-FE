import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { setFilters } from '../../../store/actions/markerFilterActions';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { Scrollbars } from 'react-custom-scrollbars';
import './FollowingList.scss';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: 5
  },
}));

const FollowingList = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () =>{
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover-tt' : undefined;

  const setFilters = (user) => {
    const togglePos = !props.filters[user.username];
    props.setFilters({...props.filters, [user.username]: togglePos});
  }

  //<div onClick={() => {setFilters(followingUser)}}>toggle</div>

  const renderFollowingList = () => {
    return props.user.info.following.map((followingUser) => {
      return (
        <>
          <div className="following-user">
            <div className="img-wrapper">
              <img className="profile-img" alt={props.user.info.username + 'profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
            </div>
            <h4>{followingUser.username}</h4>

            <div className="icon-wrapper">
              <FontAwesomeIcon onClick={(e)=>{handleClick(e)}} icon={faEllipsisV} />
            </div>
          </div>
        </>
      )
    });
  }

  return (
    <>
      {
        <>
          <Scrollbars
            autoHeight
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className='scroll-container-wrapper'>
            {props.user.info && renderFollowingList()}
          </Scrollbars>
          <Popover
             id={id}
             open={open}
             className="tt-popup"
             onClick={()=>{console.log('click')}}
             anchorEl={anchorEl}
             onClose={handleClose}
             anchorOrigin={{
               vertical: 'center',
               horizontal: 'center',
             }}
             transformOrigin={{
               vertical: 'center',
               horizontal: 'left',
             }}
          >
             <Typography className={classes.typography}>Hide Markers</Typography>
             <Typography className={classes.typography}>Unfollow</Typography>
           </Popover>
         </>
      }
    </>
  )
}

const mapStateToProps = state => ({ user: state.user, location: state.location, ...state.filters})
export default connect(
    mapStateToProps,
    { setFilters }
)(FollowingList);
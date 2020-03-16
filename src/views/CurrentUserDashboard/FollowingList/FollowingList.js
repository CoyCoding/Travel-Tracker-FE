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
import {buildUsernameUrl} from '../../../utils/urlBuilder';
import './FollowingList.scss';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: 5
  },
}));

const FollowingList = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openUser, setOpenUser] = React.useState(undefined);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover-tt' : undefined;

  useEffect(() => {
    const setFromEvent = e => {
      const element = e.target.getAttribute('data-id');
      if(open && element !== 'popup-btn'){
        setAnchorEl(null)
      }
    };
    window.addEventListener("click", setFromEvent);
    return () => {
      window.removeEventListener("click", setFromEvent);
    };
  }, [open]);

  const handleClick = (event, user) => {
    setOpenUser(user);
    console.log('setting Anchor')
    setAnchorEl(event.target.closest(".following-user"));
  };

  const handleClose = () =>{
    setAnchorEl(null)
  }

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
              <img className="profile-img" alt={props.user.info.username + ' profile'} src="https://static-cdn.jtvnw.net/jtv_user_pictures/a0b2123f305b333d-profile_image-300x300.png"/>
            </div>
            <h4>{followingUser.username}</h4>

            <div data-id={'popup-btn'} onClick={(e)=>{handleClick(e, followingUser)}} className="icon-wrapper">
              <FontAwesomeIcon  icon={faEllipsisV} />
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
             anchorEl={anchorEl}
             onClose={handleClose}
             anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
          >
            <div id="popup">
             <Typography
             data-id={'popup-btn'}
             className={classes.typography}
             onClick={()=>{setFilters(openUser)}}>
              {!openUser || !props.filters[openUser.username] ?  'Hide Markers' : 'Show markers'}
             </Typography>
             <Typography data-id={'popup-btn'} onClick={()=>{console.log(openUser)}} className={classes.typography}>Unfollow</Typography>
             <Typography data-id={'popup-btn'} onClick={()=>{props.history.push(buildUsernameUrl(openUser.username))}} className={classes.typography}>View Page</Typography>
            </div>
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
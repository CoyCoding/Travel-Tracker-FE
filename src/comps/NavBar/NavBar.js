import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import SearchIcon from '../Icons/SearchIcon';

import './NavBar.scss';

const NavBar = (props) => {
  const logout = () => {
    console.log(props)
    props.logout();
  }

  return (
    <nav className="app-header">
      <h1>Travel Tracker</h1>
      <div className="search-bar">
        <input type="text" placeholder="Find Users..."/>
        <SearchIcon className="search"/>
      </div>
      <ul className="nav-list">
        <li className="uname">
          <p>Settings</p>
          <FontAwesomeIcon className="cog" icon={faCog}/>
        </li>
        <li className='nav-btn' onClick={() => logout()}>logout</li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state =>({auth: state.auth});

export default connect(mapStateToProps, { logout })(NavBar);
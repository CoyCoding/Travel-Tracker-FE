import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

import './NavBar.scss';

const NavBar = (props) => {
  const logout = () => {
    console.log(props)
    props.logout();
  }

  return (
    <nav className="app-header">
      <h1>Travel Tracker</h1>
      <ul className="nav-list">
        <li className='nav-btn' onClick={() => logout()}>logout</li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state =>({auth: state.auth});

export default connect(mapStateToProps, { logout })(NavBar);
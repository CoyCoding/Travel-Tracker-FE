import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

import './Footer.scss';

const Footer = (props) => {

  return (
    <nav className="app-footer">

    </nav>
  )
}

const mapStateToProps = state =>({auth: state.auth});

export default connect(mapStateToProps, { logout })(Footer);
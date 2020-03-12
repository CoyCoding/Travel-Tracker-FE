import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history.js';
import { connect } from 'react-redux';
import SignIn from './views/SignIn/SignIn';
import NotFound from './views/NotFound/NotFound';
import CurrentUserDashboard from './views/CurrentUserDashboard/CurrentUserDashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import NavBar from './comps/NavBar/NavBar';
import PrivateRoute from './comps/RouteHocs/PrivateRoute';
import PublicRoute from './comps/RouteHocs/PublicRoute';
import { getCurrentUserInfo } from './store/actions/userActions';
import './App.scss';

const App = (props) => {

  useEffect(()=>{
    if(!props.user.info && props.auth.isLoggedIn){
      console.log('here')
      props.getCurrentUserInfo();
    }
  }, [props.auth.isLoggedIn])

  return (
    <Router history={history}>
      <NavBar/>
      <div className="app">
        <Switch>
          <PublicRoute path='/' exact component={SignIn}/>
          <PublicRoute path='/LogIn' exact component={SignIn}/>
          <PublicRoute path='/SignUp' exact component={SignIn}/>
          <PrivateRoute path='/Home' exact component={CurrentUserDashboard}/>
          <PrivateRoute path='/u/:username' component={UserDashboard}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({ user: state.user, auth: state.auth})
export default connect(
    mapStateToProps,
    { getCurrentUserInfo }
)(App);

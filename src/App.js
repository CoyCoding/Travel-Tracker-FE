import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history.js';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import UserDashboard from './views/UserDashboard/UserDashboard';
import NavBar from './comps/NavBar/NavBar';
import PrivateRoute from './comps/RouteHocs/PrivateRoute';
import PublicRoute from './comps/RouteHocs/PublicRoute';
import './App.scss';

const App = () => {
  return (
    <Router history={history}>
      <NavBar/>
      <div className="app">
        <Switch>
          <PublicRoute path='/' exact component={Home}/>
          <PublicRoute path='/LogIn' exact component={Home}/>
          <PublicRoute path='/SignUp' exact component={Home}/>
          <PrivateRoute path='/home' exact component={UserDashboard}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history.js';
import Home from './views/Home';
import NavBar from './comps/NavBar';

import './App.scss';

const App = () => {
  return (
    <Router history={history}>
      <NavBar/>
      <div className="app">
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

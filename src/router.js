import React, { Component } from 'react';
import { browserHistory, Router, Route } from 'react-router'
import auth from './utils/auth';

import App from './components/App';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import About from './components/About';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default function TheRouter (props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="about" component={About} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      </Route>
    </Router>
  )
}
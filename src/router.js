import React from 'react';
import { browserHistory, Router, Route } from 'react-router'
import auth from './utils/auth';

import App from './routes/App';
import Login from './routes/Login';
import Logout from './routes/Logout';
import Dashboard from './routes/Dashboard';
import About from './routes/About';

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

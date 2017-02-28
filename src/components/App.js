import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.scss';

import auth from '../utils/auth';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn()
    };

    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/LoginPage';
import LandingPage from './components/LandingPage';
import Signup from './components/SignupPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>

    );
  }
}

export default App;

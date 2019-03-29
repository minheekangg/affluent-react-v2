import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from './components/nav.js'
import Welcome from './components/welcome.js'

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/welcome" />} />
          <Route exact path="/welcome" component={Welcome} /> 
        </Switch>
      </Fragment>
      </Router>
    );
  }
}

export default App;

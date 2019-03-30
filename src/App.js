import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from './components/nav.js'
import Welcome from './components/welcome.js'
import Footer from './components/footer.js'
import About from './components/about.js'

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} /> 
          <Route exact path="/about" component={About} /> 
        </Switch>
        <Footer/>
      </Fragment>
      </Router>
    );
  }
}

export default App;

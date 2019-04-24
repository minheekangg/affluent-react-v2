import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from './components/nav.js'
import Welcome from './components/welcome.js'
import Footer from './components/footer.js'
import About from './components/about.js'
import Contact from './components/contact.js';
import WelcomeView from './components/welcome-view';

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <Switch>
            <Route exact path="/" render={() => <WelcomeView Properties={Welcome} />} /> 
            <Route path="/about" render={()=> <Nav Properties={About}/>} /> 
            <Route path="/contact" render={() => <Nav Properties={Contact} />} /> 
        </Switch>
        <Footer/>
      </Fragment>
      </Router>
    );
  }
}

export default App;

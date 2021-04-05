import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from './components/Navigation/MainNavigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import "./App.css";

const App = () => {
  return (
   <div className="mains">
      <Router>
      <MainNavigation/>
      <main>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/About" exact> <About/></Route>
        <Redirect to="" />
      </Switch>
      </main>
      <Footer />
    </Router>
   </div>
  )
};

export default App;

import React from 'react';
import './App.css'

import Home from './pages/Home';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services/" component={Services} />
        <Route exact path="/services/:slug" component={SingleService} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;

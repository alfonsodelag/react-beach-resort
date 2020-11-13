import React, { useEffect } from 'react';
import './App.css'

import Home from './pages/Home';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Login from './pages/Login';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

import NavBar from './components/NavBar';
import Checkout from './pages/Checkout';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return () => {
      // Cleanup operations go in here
      unsubscribe();
    }
  }, []);

  console.log("USER IS >>>", user);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services/" component={Services} />
        <Route exact path="/services/:slug" component={SingleService} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;

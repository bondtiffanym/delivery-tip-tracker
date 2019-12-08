import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import DeliveryList from './components/DeliveryList';
import Settings from './components/Settings';
import ErrorPage from './components/ErrorPage';
import AddDelivery from './components/AddDelivery';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/" component={DeliveryList} />
        <Route path="/add" component={AddDelivery} />
        <Route path="/settings" component={Settings} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

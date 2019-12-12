import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import DeliveryList from './components/DeliveryList';
import Settings from './components/Settings';
import ErrorPage from './components/ErrorPage';
import AddDelivery from './components/AddDelivery';
import DeliveryContextProvider from './Context';
import Modals from './components/Modals';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <DeliveryContextProvider>

      <Navbar />
      <Modals />

      <Switch>
        <Route exact path="/" component={DeliveryList} />
        <Route path="/add" component={AddDelivery} />
        <Route path="/settings" component={Settings} />
        <Route component={ErrorPage} />
      </Switch>

      </DeliveryContextProvider>
    </React.Fragment>
  );
}

export default App;

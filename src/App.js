import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/home/homepage.component'
import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header.component'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </>
  );
}

export default App;

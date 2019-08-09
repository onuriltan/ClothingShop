import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </>
  );
}

export default App;

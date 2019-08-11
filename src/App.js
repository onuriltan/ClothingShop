import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInandSignUp'

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

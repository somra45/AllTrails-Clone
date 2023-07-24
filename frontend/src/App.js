import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage/index.js';
import Navbar from './components/Navbar/index.js';
import SignupFormPage from './components/SignupFormPage/index.js';
import Splash from './components/SplashPage/index.js';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Navbar />
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
        < Navbar />
        < SignupFormPage />
      </Route>
      <Route exact path="/">
        <Navbar />
        < Splash />
      </Route>
    </Switch>
  );
}

export default App;
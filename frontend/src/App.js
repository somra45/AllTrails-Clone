import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage/index.js';
import Navbar from './components/Navbar/index.js';
import SignupFormPage from './components/SignupFormPage/index.js';
import Splash from './components/SplashPage/index.js';
import Footer from './components/Footer/index.js';
import TrailShowPage from './components/TrailShowPage/index.js';
import PhotoSlider from './components/PhotoSlider/index.js'


function App() {
  return (
    <Switch>
      <Route path="/login">
        <Navbar />
        <LoginFormPage />
        < Footer />
      </Route>
      <Route path='/signup'>
        < Navbar />
        < SignupFormPage />
        < Footer />
      </Route>
      <Route exact path="/">
        <Navbar />
        < Splash />
        < Footer />
      </Route>
      <Route exact path="/trails/:trailId">
        <Navbar />
        < TrailShowPage />
      </Route>
      <Route exact path="/trails/:trailId/photos">
        <Navbar />
        < PhotoSlider />
        < Footer />
      </Route>
    </Switch>
  );
}

export default App;
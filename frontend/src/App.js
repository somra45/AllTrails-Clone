import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage/index.js';
import Navbar from './components/Navbar/index.js';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route exact path="/">
        <Navbar />
      </Route>
    </Switch>
  );
}

export default App;
import ReactDOM from 'react-dom/client'
import React from 'react'
import { restoreSession } from './store/session.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { csrfFetch } from './store/csrf.js';
import configureStore from './store';
import App from './App';
import * as sessionActions from './store/session';
import './index.css'

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

const currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
let initialState = {}

if (currentMember) {
    initialState = {
        member: currentMember
    }
}

function Root () {
    return (
        <Provider store={store}> 
            <BrowserRouter>
                {/* <App /> */}
                <h1>hello world</h1>
            </BrowserRouter>
        </Provider>
    )
};
const root = ReactDOM.createRoot(document.getElementById('root'));

const initializeApp = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}
if (
    sessionStorage.getItem("currentMember") === null ||
    sessionStorage.getItem("X-CSRF-Token") === null 
  ) {
    store.dispatch(restoreSession()).then(initializeApp());
  } else {
    initializeApp();
  }
import ReactDOM from 'react-dom'
import React from 'react'
import { restoreSession } from './store/csrf';

const root = ReactDOM.createRoot(document.getElementById('root'));

function initializeApp() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    let initialState = {}

    if (currentUser) {
        initialState = {
            users: currentUser
        }
    }
    root.render (
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
}

restoreSession().then(initializeApp)
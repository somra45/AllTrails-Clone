import ReactDOM from 'react-dom'
import React from 'react'
import { restoreSession } from './store/csrf';

const root = ReactDOM.createRoot(document.getElementById('root'));

function initializeApp() {
    root.render (
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
}

restoreSession().then(initializeApp)
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// import * as firebase from 'firebase';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var config = {
  apiKey: "AIzaSyANfy_Z_kjxIi-U4xQPjq6g4WyQR0o4TkI",
  authDomain: "kaiserwebapp.firebaseapp.com",
  projectId: "kaiserwebapp",
  storageBucket: "kaiserwebapp.appspot.com",
  messagingSenderId: "1075982375673",
  appId: "1:1075982375673:web:85497c565b6f2be7fea028",
  measurementId: "G-LSZXN7TQEJ"
}

// firebase.initializeApp(config);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

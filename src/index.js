import React from 'react';
import ReactDOM from 'react-dom';
import { App }from './App';
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import  store  from './store/store.js'
import Routes from './Routes.js'



{/*<script src="https://www.gstatic.com/firebasejs/3.6.10/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAs07zi5TZVdEk13sWrExIAB8M3z-RcgQU",
    authDomain: "blood-bank-d4bbb.firebaseapp.com",
    databaseURL: "https://blood-bank-d4bbb.firebaseio.com",
    storageBucket: "blood-bank-d4bbb.appspot.com",
    messagingSenderId: "238002584387"
  };
  firebase.initializeApp(config);
</script>*/}

ReactDOM.render(
  // <Provider store={store}>
    <Routes />,
  // </Provider>,
  document.getElementById('root')
);

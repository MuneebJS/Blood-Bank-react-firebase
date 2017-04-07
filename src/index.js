import React from 'react';
import ReactDOM from 'react-dom';
// import { App }from './App';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Routes from './Routes.js'



// var fb = {
//   apiKey: "AIzaSyAIzeqH_Qxk9iJC-ARwgMjK-iUnVgMpn0w",
//   authDomain: "boiler-plate-auth.firebaseapp.com",
//   databaseURL: "https://boiler-plate-auth.firebaseio.com",
//   storageBucket: "boiler-plate-auth.appspot.com",
//   messagingSenderId: "506638140028"
// };
// firebase.initializeApp(fb);


{/*<script src="https://www.gstatic.com/firebasejs/3.6.10/firebase.js"></script>*/}
{/*<script>*/}
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAs07zi5TZVdEk13sWrExIAB8M3z-RcgQU",
    authDomain: "blood-bank-d4bbb.firebaseapp.com",
    databaseURL: "https://blood-bank-d4bbb.firebaseio.com",
    storageBucket: "blood-bank-d4bbb.appspot.com",
    messagingSenderId: "238002584387"
  };
  firebase.initializeApp(config);
{/*</script>*/}





ReactDOM.render(
  <div className="container" >
  <Routes />
  </div>,
  document.getElementById('root')
);


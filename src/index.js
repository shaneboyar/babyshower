import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyCTTXO62ZOySPISW4dvMb93oefC4eToYQg",
  authDomain: "boyarbabyshower.firebaseapp.com",
  databaseURL: "https://boyarbabyshower.firebaseio.com",
  projectId: "boyarbabyshower",
  storageBucket: "boyarbabyshower.appspot.com",
  messagingSenderId: "798963280630",
  appId: "1:798963280630:web:857023a6341ea8ac7a5ad7",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'
// import firebase from "firebase"
import "antd/dist/antd.css";
import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyBtvcqizYRMcQOfH6jfbBps4WuQ0LzqxcY",
    authDomain: "posty-ecd9b.firebaseapp.com",
    databaseURL: "https://posty-ecd9b.firebaseio.com",
    projectId: "posty-ecd9b",
    storageBucket: "posty-ecd9b.appspot.com",
    messagingSenderId: "816714854768",
    appId: "1:816714854768:web:22b28c1250a2ad471b1fb5"
  }
const fuego = new Fuego(firebaseConfig)

ReactDOM.render(
	<React.StrictMode>
		<FuegoProvider fuego={fuego}><App /></FuegoProvider>
	
	</React.StrictMode>,
	document.getElementById("root")
);

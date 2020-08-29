import React, { useState } from "react";
import firebase from "firebase"
import { Button } from "antd";
import Login from "./views/login/login"

const App = () => {
	const [isLogged, setIsLogged] = useState(false);

	firebase.auth().onAuthStateChanged((user) => {
		if (user != null) {
		  setIsLogged(true);
		} else {
		  setIsLogged(false);
		}
	  });

	return (
        <div>{isLogged ? <Button>Login</Button> : <Login/>}</div>
      );
};

export default App;

import React, { useState } from "react";
import firebase from "firebase"
import { Button } from "antd";

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
        <div>{isLogged ? <Button>Login</Button> : <Button>Dashboard</Button>}</div>
      );
};

export default App;

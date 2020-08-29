import React, { useState } from "react";
import firebase from "firebase";
import Login from "./views/login/login";
<<<<<<< HEAD
import Cam from "./templates";
import SideBar from "./common/components/SideNav";
=======
import Routes from "./common/utils/routes";
>>>>>>> 24e9bdbff80e021d2d03fd808b3394b3aa9ed062

const App = () => {
	const [isLogged, setIsLogged] = useState(false);

<<<<<<< HEAD
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });
  return <div>{isLogged ? <SideBar /> : <Login />}</div>;
=======
	firebase.auth().onAuthStateChanged((user) => {
		if (user != null) {
			setIsLogged(true);
		} else {
			setIsLogged(false);
		}
	});
	return <div>{isLogged ? <Routes /> : <Login />}</div>;
>>>>>>> 24e9bdbff80e021d2d03fd808b3394b3aa9ed062
};

export default App;

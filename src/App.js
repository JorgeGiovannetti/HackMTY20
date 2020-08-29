import React, { useState } from "react";
import firebase from "firebase";
import Login from "./views/login";
import Routes from "./common/utils/routes";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });
  return <div>{isLogged ? <Routes /> : <Login />}</div>;
};

export default App;

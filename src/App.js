import React, { useState } from "react";
import firebase from "firebase";
import Login from "./views/login/login";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });
  return <div>{isLogged ? <div>Logged In</div> : <Login />}</div>;
};

export default App;

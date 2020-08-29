import React, { useState } from "react";
import firebase from "firebase";
import Login from "./views/login/login";

import SideNav from "./common/components/SideNav";
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
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{isLogged ? <SideNav /> : <Login />}</div>
      </div>
    </div>
  );
};

export default App;

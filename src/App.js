import React, { useState } from "react";
import firebase from "firebase";
import { Button } from "antd";
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
			<SideNav />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div>
					{isLogged ? <Button>Login</Button> : <Button>Dashboard</Button>}
				</div>
			</div>
		</div>
	);
};

export default App;

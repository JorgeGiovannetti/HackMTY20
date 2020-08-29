import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Router } from "react-router-dom";
import Routes from "./common/utils/routes";
import history from "./common/utils/routes/history";

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<Routes />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

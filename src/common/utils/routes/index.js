import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../../../views/dashboard";

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" component={Dashboard} />
		</Switch>
	</Router>
);

export default Routes;

import React from "react";
import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router,
} from "react-router-dom";
import Dashboard from "../../../views/dashboard";
import Analytics from "../../../views/analytics";
import Reports from "../../../views/reports";

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/analytics" exact component={Analytics} />
			<Route path="/reports" exact component={Reports} />
			<Redirect to="/" />
		</Switch>
	</Router>
);

export default Routes;

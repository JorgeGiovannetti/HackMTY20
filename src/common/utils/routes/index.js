import React from "react";
import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router,
} from "react-router-dom";
import VideoFeed from "../../../views/videoFeed";
import Analytics from "../../../views/analytics";
import Reports from "../../../views/reports";

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={VideoFeed} />
			<Route path="/analytics" exact component={Analytics} />
			<Route path="/reports" exact component={Reports} />
			<Redirect to="/" />
		</Switch>
	</Router>
);

export default Routes;

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Post from '../pages/Post';
import Page404 from '../pages/Page404';

const App = () => {
	return (
		<div className="ui container">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/post/:id" component={Post} />
				<Route component={Page404} />
			</Switch>
		</div>
	);
}

export default App;

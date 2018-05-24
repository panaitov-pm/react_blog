import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import SearchField from '../SearchField';
import Post from '../pages/Post';
import Page404 from '../pages/Page404';

const App = () => {
	return (
		<Fragment>
			<SearchField />
			<div className="ui container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/post/:id" component={Post} />
					<Route component={Page404} />
				</Switch>
			</div>
		</Fragment>
	);
}

export default App;

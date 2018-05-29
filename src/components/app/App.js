import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Async from 'react-code-splitting'

const Home = () => <Async load={import('../pages/Home')}/>;
const Post = (props) => <Async load={import('../pages/Post')} componentProps={props}/>;
const Page404 = () => <Async load={import('../pages/Page404')}/>;

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

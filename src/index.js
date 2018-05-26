import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './components/common/Root';
import configureStore from './configureStore';

import './index.css';

const store = configureStore();
window.store = store;

ReactDOM.render(
	<BrowserRouter>
		<Root store={store} />
	</BrowserRouter>,
	document.getElementById('root'));

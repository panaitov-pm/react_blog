import {combineReducers} from 'redux';
import posts from './posts';
import postViews from './postViews';

export default combineReducers({
	posts,
	postViews,
});

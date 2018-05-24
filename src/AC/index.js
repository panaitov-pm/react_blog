import C from '../constants';

export const getPosts = () => dispatch => {
	dispatch({
		type: C.GET_POSTS + C.START_LOAD
	});
	fetch('http://jsonplaceholder.typicode.com/posts/')
		.then(response => response.json())
		.then(data => {
			dispatch({
				type: C.GET_POSTS + C.FINISH_LOAD,
				posts: data
			})
		})
		.catch(error => {
			dispatch({
				type: C.GET_ERRORS,
				errors: error
			})
		})
};
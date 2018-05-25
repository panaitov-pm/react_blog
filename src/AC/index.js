import C from '../constants';

export const getPosts = () => dispatch => {
	dispatch({
		type: C.GET_POSTS + C.START_LOAD
	});
	fetch('http://jsonplaceholder.typicode.com/posts/')
	.then(response => response.json())
	.then(data => {
		dispatch({
			type : C.GET_POSTS + C.FINISH_LOAD,
			posts: data
		})
	})
	.then(() => {
		dispatch({
			type: C.GET_COMMENTS + C.START_LOAD
		});
		fetch('http://jsonplaceholder.typicode.com/comments/')
		.then(response => response.json())
		.then(comments => {
			dispatch({
				type : C.GET_COMMENTS + C.FINISH_LOAD,
				comments
			})
		})
		.catch(error => {
			dispatch({
				type  : C.GET_ERRORS,
				errors: error
			})
		})
	})
	.then(() => {
		dispatch({
			type: C.GET_USERS + C.START_LOAD
		});
		fetch('http://jsonplaceholder.typicode.com/users/')
		.then(response => response.json())
		.then(users => {
			dispatch({
				type : C.GET_USERS + C.FINISH_LOAD,
				users
			})
		})
		.catch(error => {
			dispatch({
				type  : C.GET_ERRORS,
				errors: error
			})
		})
	})
	.catch(error => {
		dispatch({
			type  : C.GET_ERRORS,
			errors: error
		})
	})
};


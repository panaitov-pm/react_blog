import C from '../constants';

const defaultState = {
	data       : [],
	comments   : [],
	users      : [],
	currentPost: {},
	isLoading  : false
};

export default (state = defaultState, action) => {
	const {type, posts, comments, users, currentPost} = action;

	switch (type) {
		case C.GET_POSTS + C.START_LOAD:
			return {...state, isLoading: true};
		case C.GET_POSTS + C.FINISH_LOAD:
			return {...state, data: [...posts]};
		case C.GET_POST + C.FINISH_LOAD:
			return {...state, currentPost: {...currentPost}};
		case C.GET_COMMENTS + C.FINISH_LOAD:
			return {...state, comments: [...comments]};
		case C.GET_USERS + C.FINISH_LOAD:
			return {...state, users: [...users], isLoading: false};
		default:
			return state;
	}
}

import C from '../constants';

const defaultState = {
	posts    : [],
	isLoading: false
};

export default (state = defaultState, action) => {
	const {type, posts} = action;

	switch (type) {
		case C.GET_POSTS + C.START_LOAD:
			return {...state, isLoading: true};
		case C.GET_POSTS + C.FINISH_LOAD:
			return {...state, posts: [...posts], isLoading: false};
		default:
			return state;
	}
}
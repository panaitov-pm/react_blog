import C from '../constants';

const defaultState = {
	data     : {},
	isLoading: false
};

export default (state = defaultState, action) => {
	const {type, post} = action;

	switch (type) {
		case C.GET_CURRENT_POST + C.START_LOAD:
			return {...state, isLoading: true};
		case C.GET_CURRENT_POST + C.FINISH_LOAD:
			return {...state, data: post, isLoading: false};
		default:
			return state;
	}
}
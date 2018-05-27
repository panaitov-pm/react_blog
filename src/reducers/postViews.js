import C from '../constants';


export default ( state = {}, action ) => {
	const { type, id } = action;

	switch ( type ) {
		case C.SET_POST_VIEW:
			return {...state, [id]: (state[id] || 0) + 1 };
		default:
			return state;
	}
}

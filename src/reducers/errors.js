import C from '../constants';


export default (state = '', action) => {
	const {type, errors} = action;

	switch (type) {
		case C.GET_ERRORS:
			return errors;
		default:
			return state;
	}
}
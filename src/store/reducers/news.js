import * as actionTypes from '../actions/actionTypes';

const initialState = {
	allNews: [],
	visible: false,
	loading: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_NEWS:
			return {
				...state,
				visible: !state.visible,
			};

		case actionTypes.FETCH_NEWS_START:
			return {
				...state,
				loading: true
			};
		case actionTypes.FETCH_NEWS_SUCCESS:
			return {
				...state,
				allNews: action.payload,
				loading: false
			};

		default:
			return state;
	}

};

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	movies: [],
	loading: false,
	film: [],
	videoKey: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};
		case actionTypes.FETCH_FILM:
			return {
				...state,
				film: action.payload,
				loading: false
			};
		case actionTypes.FETCH_TRAILER_ID:
			return {
				...state,
				trailerId: action.payload
			};
		case actionTypes.FETCH_VIDEO_KEY:
			return {
				...state,
				videoKey: action.payload
			};
		case actionTypes.LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}

};

export default reducer;
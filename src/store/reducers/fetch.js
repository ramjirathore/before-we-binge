import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false,
    film: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case actionTypes.FETCH_FILM:
            return {
                ...state,
                film: action.payload,
                loading: false
            }
        case actionTypes.LOADING:
            return {
                    ...state,
                    loading: true
                }
        default:
            return state;
    }

};

export default reducer;
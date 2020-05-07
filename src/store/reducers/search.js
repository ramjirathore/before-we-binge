import * as actionTypes from '../actions/actionTypes';

const initialState = {
    inputText: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE:
            return {
                ...state,
                inputText: action.payload,
            }
        case actionTypes.CLEAR_INPUT:
            return {
                ...state,
                inputText: ''
            }
        default:
            return state;
    }

};

export default reducer;
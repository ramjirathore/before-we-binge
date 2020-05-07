import * as actionTypes from './actionTypes';

export const searchMovie = (text) => {
    return {
        type: actionTypes.SEARCH_MOVIE,
        payload: text
    }
};

export const clearInput = () => {
    return {
        type: actionTypes.CLEAR_INPUT
    }
};

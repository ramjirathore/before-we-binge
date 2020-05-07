import axios from 'axios';
import APIkey  from '../../APIkey';

import * as actionTypes from './actionTypes';

export const loading = () => {
    return {
        type: actionTypes.LOADING
    }
}

export const fetchMovies = (text) => {
    return dispatch => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIkey.key}&s=${text}`)
            .then(response => dispatch({
                type: actionTypes.FETCH_MOVIES,
                payload: response.data
            }))
            .catch(err => console.log(err));
    };
};

export const fetchFilm = (id) => {
    return dispatch => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIkey.key}&i=${id}`)
            .then(response => dispatch({
                type: actionTypes.FETCH_FILM,
                payload: response.data
            }))
            .catch(err => console.log(err));
    };
};

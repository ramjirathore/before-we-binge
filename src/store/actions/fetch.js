import axios from 'axios';
import APIkey from '../../APIkey';

import * as actionTypes from './actionTypes';

export const loading = () => {
	return {
		type: actionTypes.LOADING
	};
};

export const fetchMovies = (text) => {
	return dispatch => {
		axios.get(`https://www.omdbapi.com/?apikey=${APIkey.omdb_key}&s=${text}`)
			.then(response => dispatch({
				type: actionTypes.FETCH_MOVIES,
				payload: response.data
			}))
			.catch(err => console.log(err));
	};
};

export const fetchFilm = (id) => {
	return dispatch => {
		axios.get(`https://www.omdbapi.com/?apikey=${APIkey.omdb_key}&i=${id}`)
			.then(response => dispatch({
				type: actionTypes.FETCH_FILM,
				payload: response.data
			}))
			.catch(err => console.log(err));
	};
};

export const fetchTrailers = (id) => {
	return dispatch => {
		axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${APIkey.tmdb_key}`)
			.then(response => {
				console.log(response.data);
				dispatch({
					type: actionTypes.FETCH_TRAILERS,
					payload: response.data
				});
			})
			.catch(err => console.log(err));
	};
};

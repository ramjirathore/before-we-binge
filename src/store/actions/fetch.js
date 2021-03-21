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

export const fetchTrailerId = (movieName) => {
	return dispatch => {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey.tmdb_key}&query=${movieName}`)
			.then(response => {
				const id = response.data.results[0].id;
				axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIkey.tmdb_key}&language=en-US`)
					.then(response => {
						dispatch({
							type: actionTypes.FETCH_VIDEO_KEY,
							payload: response.data.results[0].key
						});
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};
};


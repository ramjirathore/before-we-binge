import axios from 'axios';
import * as actionTypes from './actionTypes';

import APIkey from '../../APIkey';


export const toggleNews = () => {
	return {
		type: actionTypes.TOGGLE_NEWS,
	};
};

export const fetchNewsStart = () => {
	return {
		type: actionTypes.FETCH_NEWS_START,
	};
};



export const fetchNews = (id) => {
	fetchNewsStart();
	return dispatch => {
		axios.get(`https://newsapi.org/v2/everything?q=movies&from=2021-02-21&sortBy=publishedAt&apiKey=${APIkey.news_key}`)
			.then(response => {
				dispatch({
					type: actionTypes.FETCH_NEWS_SUCCESS,
					payload: response.data.articles
				});
			})
			.catch(err => console.log(err));
	};
};
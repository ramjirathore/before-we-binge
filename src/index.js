import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter as Router } from 'react-router-dom';

import searchMovies from './store/reducers/search';
import fetchMovies from './store/reducers/fetch';
import seeNews from './store/reducers/news';
import App from './App';

import './index.css';

const rootReducer = combineReducers({
	srch: searchMovies,
	fetch: fetchMovies,
	news: seeNews
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// A Middleware for testing purposes
// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] Dispatching', action);
//       const result = next(action);
//       console.log('[Middleware] next state', store.getState());
//       return result;
//     }
//   }
// }

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsCard from '../components/NewsCard';

import * as actionCreators from '../store/actions/index';

class SearchForm extends Component {
	changeHandler = (event) => {
		this.props.onSearched(event.target.value);
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.props.onFetchedMovies(this.props.text);
		this.props.onLoaded();
		this.props.OnInputCleared();
	};

	componentDidMount() {
		this.props.fetchNews();
	}

	getNews = () => {
		return (
			<div className='news_container'>
				<h2 className='mb-5'>Recent News</h2>
				<div className='news_container_cards'>
					{ this.props.news.slice(0, 4).map((item, index) => <NewsCard key={ index } { ...item } />) }
				</div>
			</div>
		);
	};

	render() {
		return (
			<div style={ { padding: '20px', marginTop: '100px' } }>
				<div className="container mt-5 text-center" style={ { color: 'white' } }>
					{ this.props.visible && !this.props.loadingNews ? this.getNews() : null }
					<div className="container">
						<h1 className="display-4 mb-3">
							<i className="fa fa-search" /> Search for a movie, TV series..
                    </h1>
						<form id="searchform" onSubmit={ this.submitHandler }>
							<input
								name="text"
								type="text"
								className="form-control"
								value={ this.props.text }
								onChange={ this.changeHandler }
								placeholder="Type a movie/series..."
							/>
							{/* <button type="submit" className="btn btn-primary btn-bg mt-3">
                                Search
                            </button> */}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	text: state.srch.inputText,
	visible: state.news.visible,
	news: state.news.allNews,
	loadingNews: state.news.loading

});

const mapDispatchToProps = dispatch => ({
	onSearched: (inputText) => dispatch(actionCreators.searchMovie(inputText)),
	onFetchedMovies: (searchedText) => dispatch(actionCreators.fetchMovies(searchedText)),
	onLoaded: () => dispatch(actionCreators.loading()),
	OnInputCleared: () => dispatch(actionCreators.clearInput()),
	fetchNews: () => dispatch(actionCreators.fetchNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
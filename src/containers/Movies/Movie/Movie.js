import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import * as actionCreators from "../../../store/actions/index";

import Spinner from "../../../components/UI/Spinner/Spinner";

class Movie extends Component {
	state = {
		showModal: false
	};

	componentDidMount() {
		this.props.onFilmFetched(this.props.match.params.id);
		this.props.onLoaded();
	}

	render() {
		const { loading } = this.props;
		let content = (
			<div
				style={ {
					marginRight: "300px",
					marginLeft: "300px",
					marginTop: "120px",
					padding: "4px",
				} }
			>
				<div className="row my-4">
					<div className="col-sm-1"></div>
					<div
						className="col-md-3 card bg-dark border-secondary"
						style={ { padding: "0px", height: "450px" } }
					>
						<img
							src={ this.props.movie.Poster }
							className="w-100"
							alt="Poster"
							style={ { height: "450px", width: "100%" } }
						/>
					</div>
					<div className="col-md-7 ml-3 ">
						<h1 className="text-light text-center mb-5">
							{ this.props.movie.Title }
						</h1>
						<ul className="list-group text-light my-4 mt-3">
							<li className="list-group-item bg-dark mb-2">
								<strong>Genre:</strong> { this.props.movie.Genre }
							</li>
							<li className="list-group-item bg-dark mb-2">
								<strong>Rated: </strong>{ " " }
								<i className="fa fa-star" aria-hidden="true" id="star-logo"></i>{ " " }
								{ this.props.movie.imdbRating }/10
              </li>
							<li className="list-group-item bg-dark mb-2">
								<strong>Released: </strong> { this.props.movie.Year }
							</li>
							<li className="list-group-item bg-dark mb-2">
								<strong>Director: </strong> { this.props.movie.Director }
							</li>
							<li className="list-group-item bg-dark mb-2">
								<strong>Writer: </strong> { this.props.movie.Writer }
							</li>
							<li className="list-group-item bg-dark mb-1">
								<strong>Cast: </strong> { this.props.movie.Actors }
							</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div
						className="card card-body bg-dark text-light"
						style={ { marginLeft: "110px", marginRight: "110px" } }
					>
						<div className="conatiner">
							<p className="text-left">{ this.props.movie.Plot }</p>
							<hr />
							<div className="text-center">


								<Link
									to="/"
									className="center text-light"
									data-toggle="tooltip"
									data-placement="bottom"
									title="Go back to Search"
								>
									<div className="btn btn-danger">Go Back</div>
								</Link>
								<button className="btn ml-3 mr-3 btn-success" onClick={ () => this.setState({ showModal: true }) }>Watch Trailer</button>
								<a href={ "https://www.imdb.com/title/" + this.props.movie.imdbID }
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary text-center"
									data-toggle="tooltip"
									data-placement="bottom"
									title="Go to IMDB Website"
								>
									View on IMDB
              					</a>
							</div>
						</div>
					</div>
					<Modal show={ this.state.showModal } className="my-modal" size="xl" centered onHide={ () => this.setState({ showModal: false }) } >
						<Modal.Header closeButton >
							<h5 className="text-light text-center mb-2">
								Trailer: { this.props.movie.Title }
							</h5>
						</Modal.Header>
						<Modal.Footer>
							<iframe src={ `https://www.youtube.com/embed/${this.props.trailerKey}` }
								frameborder='0'
								allow='autoplay; encrypted-media'
								allowfullscreen="allowfullscreen"
								mozallowfullscreen="mozallowfullscreen"
								msallowfullscreen="msallowfullscreen"
								oallowfullscreen="oallowfullscreen"
								webkitallowfullscreen="webkitallowfullscreen"
								title='video'
								style={ { width: '90vw', height: '60vh' } }
							/>
						</Modal.Footer>
					</Modal>
				</div >
			</div >
		);
		let spinner = (
			<div style={ { marginTop: "350px" } }>
				<Spinner />
			</div>
		);
		return <React.Fragment>{ loading ? spinner : content }</React.Fragment>;
	}
}

const mapStateToProps = (state) => ({
	loading: state.fetch.loading,
	movie: state.fetch.film,
	trailerKey: state.fetch.videoKey
});

const mapDispatchToProps = (dispatch) => ({
	onFilmFetched: (id) => dispatch(actionCreators.fetchFilm(id)),
	onLoaded: () => dispatch(actionCreators.loading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);;

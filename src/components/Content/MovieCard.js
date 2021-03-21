import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

const MovieCard = (props) => {
	return (
		<div className="col-md-2" style={ { padding: "10px" } }>
			<div className="card mb-2 bg-dark border-secondary h-100">
				<img
					className="card-img-top"
					src={ props.movie.Poster }
					alt="Movie/Series Cover"
					style={ { height: "350px", width: "100%" } }
				/>
				<div className="card-body">
					<p className="card-text">
						<Link to={ "/movie/" + props.movie.imdbID }>
							<b className="btn btn-success" onClick={ () => props.fetchTrailers(props.movie.Title) }>
								Details
           				     <i className="fas fa-chevron-right" />
							</b>
						</Link>
					</p>
					<h6 className="card-title text-light">
						{ props.movie.Title } - { props.movie.Year }
					</h6>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchTrailers: (title) => dispatch(actionCreators.fetchTrailerId(title)),
});

export default connect(null, mapDispatchToProps)(MovieCard);


import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieCard from '../../components/Content/MovieCard';

class Movies extends Component {
    render() {
        const { movies } = this.props;
        const noResponse = <div className="text-light col-md-12 text-center"><h1>Result not Found! Try again.</h1></div>;
        let content;
        if ( movies.Response === 'True' ) {
            content = movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />);
        } else if( movies.Response ==='False' ) {
            content = noResponse;
        }    
        return (
            <div className="row" style={{padding: '50px', margin: '50px'}}>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.fetch.movies
});

export default connect(mapStateToProps)(Movies);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import Movies from './Movies/Movies.js';
import Spinner from '../components/UI/Spinner/Spinner';

class Search extends Component {
    render() {
        const { loading } = this.props;
        let spinner = (
            <div style={{marginTop: '120px'}}>
              <Spinner />
            </div>
          );
        return (
            <div className="conatiner">
                <SearchForm />
                {loading ? spinner : <Movies />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.fetch.loading
});


export default connect(mapStateToProps)(Search);

import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Search extends Component {

    state = {
        results: []
    }

    pushResults = (query,results) => {
        if( query && query.length > 0 ){
            this.setState({ results: !results || results.error ? [] : results })
        }else{
            this.setState({ results: []})
        }
    }

    render() {
        return (
            <div className="search-books">
                <SearchForm pushResults={this.pushResults} />
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}

export default Search;
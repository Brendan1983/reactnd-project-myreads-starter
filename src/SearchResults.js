import React, { Component } from 'react';
import Book from './Book';

class SearchResults extends Component {

    render() {
        
        const { results } = this.props;
        
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    { results.map((result) => <Book key={result.id} bookInfo={result} />) }
                </ol>
            </div>
        );
    }

}

export default SearchResults;
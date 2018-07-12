import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {

    render() {

        const { shelfInfo, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfInfo.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        { books.map( (book) => <Book key={book.id} bookInfo={book} populateShelves={() => this.props.populateShelves()} /> ) }

                    </ol>
                </div>
            </div>
        )
    }

}

export default Bookshelf;
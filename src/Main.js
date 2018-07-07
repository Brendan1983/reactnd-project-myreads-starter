import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import SearchBtn from './SearchBtn';

class Main extends Component {

  state = {
    shelves: [
      {
        name: 'Currently Reading',
        id: 'currentlyReading'
      },
      {
        name: 'Want to read',
        id: 'wantToRead'
      },
      {
        name: 'Read',
        id: 'read'
      }
    ],
    books: []
  }

  componentDidMount() {
    this.populateShelves();
  }

  populateShelves() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: [...books.filter((book) => book.shelf === 'currentlyReading' || 'wantToRead' || 'read')] });
    });
  }

	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          
          <div>
            { this.state.shelves.map((shelf) => <Bookshelf key={shelf.id} shelfInfo={shelf} books={this.state.books.filter((book) => book.shelf === shelf.id )} populateShelves={() => this.populateShelves()} />) }
          </div>

        </div>
        <SearchBtn />
      </div>
		)
	}
}

export default Main;
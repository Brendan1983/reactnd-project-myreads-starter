import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Bookshelf extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.refreshShelf(this.props.shelfInfo.id);
    console.log('shelf mounted');
  }
	
  refreshShelf(shelf) {
    console.log('shelf refresh middle');
    BooksAPI.getAll().then((books) => {
      books = books.filter((book) => book.shelf === shelf);
      this.setState({books: [...books]})
      console.log('shelf refreshed');
    });
  }

	render() {

    const { shelfInfo } = this.props;

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{shelfInfo.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            
          	{ this.state.books.map((book) => <Book key={book.id} bookInfo={book} refreshShelf={() => this.refreshShelf} /> )}
            
          </ol>
        </div>
      </div>
		)
	}

}

export default Bookshelf;
import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Bookshelf extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.refreshShelf(this.props.shelfInfo.id);
  }
	
  refreshShelf(shelf) {
    BooksAPI.getAll().then((books) => {
      books = books.filter((book) => book.shelf === shelf);
      this.setState({books: [...books]})
    });
  }

  updateShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
        this.refreshShelf(shelf);
      }
    )
  }

	render() {

    const { shelfInfo } = this.props;

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{shelfInfo.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            
          	{ this.state.books.map((book) => <Book key={book.id} bookInfo={book} updateShelf={() => this.updateShelf} /> )}
            
          </ol>
        </div>
      </div>
		)
	}

}

export default Bookshelf;
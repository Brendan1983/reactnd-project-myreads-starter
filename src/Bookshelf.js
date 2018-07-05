import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Bookshelf extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      books = books.filter((book) => book.shelf === this.props.shelfInfo.id);
      this.setState({books: [...books]})
    });
  }
	
	render() {

    const { shelfInfo } = this.props;

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{shelfInfo.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            
          	{ this.state.books.map((book) => <Book key={book.id} bookInfo={book} updateShelf={this.props.updateShelf} /> )}
            
          </ol>
        </div>
      </div>
		)
	}

}

export default Bookshelf;
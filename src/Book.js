import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {

  state = {
    shelf: ''
  }

  componentDidMount() {
    BooksAPI.get(this.props.bookInfo.id).then((book) => {
        this.setState({shelf: book.shelf})
      }
    )
  }

  handleChange(book, shelf) {
    this.props.updateShelf(book, shelf);
    this.setState({shelf: shelf})  
  }

	render() {
		
    const { bookInfo } = this.props;
    const bgImage = bookInfo.imageLinks ? bookInfo.imageLinks.smallThumbnail : "('./icons/missing-cover.png')" ;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bgImage})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.handleChange(bookInfo, event.target.value)} value={this.state.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookInfo.title}</div>
          <div className="book-authors">{ !!bookInfo.authors ? bookInfo.authors.join(', ') : '' }</div>
        </div>
      </li>
		);
	}
	
}

export default Book;
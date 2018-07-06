import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {

  state = {
    shelf: this.props.bookInfo.shelf
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      if(this.props.populateShelves){
        this.props.populateShelves();
      }
      this.setState({shelf: shelf});
    });
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
              <select onChange={(event) => this.updateBook(bookInfo, event.target.value)} value={this.state.shelf}>
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
import React, { Component } from 'react';

class Book extends Component {

	render() {
		
    const { bookInfo } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookInfo.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.props.updateShelf(bookInfo, event.target.value)} >
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
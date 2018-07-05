import React, { Component } from 'react';
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
    ]
  }

	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          
          <div>
            { this.state.shelves.map((shelf) => <Bookshelf key={shelf.id} shelfInfo={shelf} />) }
          </div>

        </div>
        <SearchBtn />
      </div>
		)
	}
}

export default Main;
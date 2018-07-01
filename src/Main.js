import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import SearchBtn from './SearchBtn';

class Main extends Component {
	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          
          <div>
            <Bookshelf />
          </div>

        </div>
        <SearchBtn />
      </div>
		)
	}
}

export default Main;
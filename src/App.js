import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Main from './Main';

class BooksApp extends React.Component {

  updateShelf(book, shelf) {
    BooksAPI.update(book, shelf);
  }	

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
        	<Main updateShelf={this.updateShelf} />
        )} />
        <Route path="/search" render={() => (
        	<Search updateShelf={this.updateShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp

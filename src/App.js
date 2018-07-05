import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Search from './Search';
import Main from './Main';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp

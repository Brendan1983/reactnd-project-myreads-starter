import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchForm extends Component {
	
	state = {
		value: ''
	}

	handleChange = (event) => {
		this.setState({ value:event.target.value })
		if( this.state.value.length > 0 ){
			BooksAPI.search(this.state.value)
			.then((results) => {
				this.props.pushResults(this.state.value,results);
			});
		}
	}

	render() {
		return(
			
			<div className="search-books-bar">
			  <Link to='/' className="close-search">Close</Link>
			  <div className="search-books-input-wrapper">
			    <input type="text" value={this.state.value} placeholder="Search by title or author" onChange={this.handleChange}/>
			  </div>
			</div>
			
		);
	}
}

export default SearchForm;
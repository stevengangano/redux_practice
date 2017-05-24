import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import "BookDetail" to app.js
class BookDetail extends Component {

	//because "state = null" "this.props.book" is null as the default state
	//so we need insert the if statement
	render() {

		if(!this.props.book) {
			return <div> Select abook to get started. </div>
		}

		return (
			<div>
				<h3> Details for: </h3>
				<div> {this.props.book.title} </div>
        <div> {this.props.book.pages} </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		//"books" is passed as a prop to the function above "this.props.book.title"
		//"book" can be named anything you want
		//"activeBook" is taken from reducers/index.js which is taken from reducer_active_books.js
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);

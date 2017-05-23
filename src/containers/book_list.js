//here we are rendering the components to the page
//book_list.js is considered a container because it only cares about the state for the list of books

//Promote from component folder to container folder if you are using react and redux
//You insert this file in a container folder only used if redux is being used
import React, { Component } from 'react';
//This is a library that connects redux and react to work together
import { connect } from 'react-redux';

class BookList extends Component {

  //this renders the <li> inside <ul>
  //"books" in "this.props.books" is from the function mapStateToProps(state) below
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item" key={book.title}>
          {book.title}
        </li>
      );
    });
  }

  //The function above "this.renderList()"
  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

//If the list of books ever changes, this function will re-render
//"(state)" is the list of books
function mapStateToProps(state) {
	//whatever is returned will be show up as prps inside BookList
	return {
		//"books" is the prop from "renderList()" above
		// "books" from "state.books" is grabbed from "reducers/index.js" which is the array from "src/components.app.js"
		books: state.books
	};
}

//connect takes 2 arguments. This bridges the state and react.
//connect(state function)(the container)
export default connect(mapStateToProps)(BookList);

//here we are rendering the components to the page
//book_list.js is considered a container because it only cares about the state for the list of books

//Promote from component folder to container folder if you are using react and redux
//You insert this file in a container folder only used if redux is being used
import React, { Component } from 'react';
//This is a library that connects redux and react to work together
import { connect } from 'react-redux';
//grabs function from actions.index.js
import { selectBook } from '../actions/index';
//this allows the object returned from the action creator to flow throughout all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {

  //this renders the <li> inside <ul>
  //"books" in "this.props.books" is from the function mapStateToProps(state) below
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          //this renders whatever is shown in actions/index.js
		      //"book" is being passed an argument because book represents
          //the data needed in "book.title" in actions/index.js
		      onClick={() => this.props.bookSelected(book)}>
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
		//"books" passes the prop to "renderList()" above
    //You can now call "this.props.books" in the function above
		// "books" from "state.books" is grabbed from "reducers/index.js" which is the array from "reducer_books.js"
		books: state.books
	};
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	//"bookSelected" can now be passed a prop (this.props.bookSelected) which is our action creator
	//"selectBook" is what we imported from actions/index.js
	//"bindActionCreators" and "dispatch" means whenever the "selectBook" is called, the result should be passed to all reducers
	return bindActionCreators ({bookSelected: selectBook}, dispatch)
}

//connect takes 2 arguments. This bridges the state and react.
//connect(state function)(the container)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

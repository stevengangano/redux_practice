import { combineReducers } from 'redux';
//BooksReducer can be named anything you want.
//This grabs the data from reducer_books.js
import BooksReducer from './reducer_books';
//This grabs the data from reducer_active_book.js
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //"books" is the single piece of state and this can be named anything you want.
  //"BooksReducer" is the function from reducer_books.js
  books: BooksReducer,
  //"ActiveBook" is the function from reducer_active_books.js
  activeBook: ActiveBook
});

export default rootReducer;

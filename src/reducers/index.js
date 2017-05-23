import { combineReducers } from 'redux';
//BooksReducer can be named anything you want.
//This grabs the data from reducers/index.js
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //"books" is the single piece of state and this can be named anything you want.
  //"BooksReducer" is the function from reducer_books.js
  books: BooksReducer
});

export default rootReducer;

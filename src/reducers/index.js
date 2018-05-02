import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({ //this resducer will add a key to the global application state and the value which is returned in the BooksReducer.
  books:BooksReducer,
  activeBook:ActiveBook
});

export default rootReducer;

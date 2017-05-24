//export so this can function be used in others areas of our application
//So whenever a book from the list is selected, it will display this in the console
//"book" represents data from reducers/reducer_books.js
export function selectBook (book) {
	//console.log('A book has been selected: ', book.title);
	// selectBook is an ActionCreator, it needs to return an action,
	//an object with a type property
	//type must always be included and be uppercase
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}

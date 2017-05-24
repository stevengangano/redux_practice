//This data is passed to reducers/index.js
//state argument is not application state,
//only the state this reducer is repsonsible for
//state is undefined so we set it equal to null

export default function (state = null, action) {

	//This is saying if "action.type"
	switch(action.type) {

	//is "BOOK_SELECTED"
	case 'BOOK_SELECTED':
		//then "action.payload" will be returned which is equal to book (see actions/index.js)
		return action.payload;

	}

	//when the app is just booted and no book is selected, we are just returning the state
	return state;
}

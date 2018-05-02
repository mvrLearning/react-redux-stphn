export function selectBook(book){
	//selectbook is an action creator, it needs to return an action,
	//an object with type property
	return{
		type:'BOOK_SELECTED',
		payload:book
	};
}//here we are piping the action to all the reducers
import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


 class BookList extends Component{ //container
	renderList(){
		return this.props.books.map((book)=>{
			return(
				<li
				 key={book.title} 
				 onClick={()=>this.props.selectBook(book)}
				 className="list-group-item">
				 {book.title}
				 </li>
				)
		});
	}
	render(){
		return(
			<ul className = "list-group col-sm-4">
				{this.renderList()}
			</ul>
			)
	}
}

function mapStateToProps(state){ // when ever application state changes container will re render 
	//what ever it is returned will shoow as props inside of BookList
	return{
		books: state.books
	};
}

function mapDispatchToProps(dispatch){ //anything returned from this will be available as props on the BookList container(this.props.selectBook)
	//when ever select book is called the result should be passed to all the reducers
	return bindActionCreators({selectBook:selectBook},dispatch) 
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList) 
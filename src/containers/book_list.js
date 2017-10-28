// render a list of books

// Container is Component that has access to state produced by Redux. Inject state in container
// Most parent component (of a hierarchy) is good candidate for container

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li  
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is return will show up as prop inside
	// of BookList

	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenerver selectBook is called, result should be passed to
	// all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
} 

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

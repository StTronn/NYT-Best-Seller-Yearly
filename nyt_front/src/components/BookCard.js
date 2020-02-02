import React from 'react';



//autor
//name 
//img
//rank
//10 list per page 
//below we can have stats 


class BookCard extends React.Component {

	render() {
		let {book}=this.props;
		console.log(book);
		return (
			<div>
				Hellos 
			</div>
		)
	}

}

export default BookCard;

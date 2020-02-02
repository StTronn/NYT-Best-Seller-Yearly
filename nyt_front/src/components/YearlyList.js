import React from 'react';
import BookCard from '../components/BookCard';
class YearlyList extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            books:[],
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/yearly_top/')
        .then(response =>{return response.json()})
        .then(data=>{
            let books= data.books;
            console.log(books);
            this.setState({books})
        })
        .catch(()=>{console.log("error couldn't fetch ")})
    }

    render () {
		let {books} = this.state;

		console.log(books);
        return (
			<div>
				{books.length !== 0 && 
						books.map(book=>(
						
							<BookCard book={book} id={book.id}/>
						))
				}
			</div>
        )
    }
} 

export default YearlyList;

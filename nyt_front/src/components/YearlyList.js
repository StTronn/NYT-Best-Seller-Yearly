import React from 'react';
import BookCard from '../components/BookCard';
import styled from 'styled-components';


const Cointainer=styled.div `
    display:grid;
    margin-left:95px;
    align-content:center;
    justify-content:center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:auto;
`




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
			<Cointainer>
				{books.length !== 0 && 
						books.map(book=>(
						
							<BookCard book={book} id={book.id}/>
						))
				}
			</Cointainer>
        )
    }
} 

export default YearlyList;

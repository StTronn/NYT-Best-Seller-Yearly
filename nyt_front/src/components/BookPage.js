import React from 'react';
import styled from 'styled-components';
import {
    useParams
  } from "react-router-dom"  ;
  

const Cointainer = styled.div `
    display:grid;
    width:100%;
    height:auto;
    grid-template-rows: 60vh auto; 

`


const Image=styled.img `
    height : 300px;
    margin-right:40px;
    margin-bottom:auto;
     
`

export default class BookPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
           book : {} 
        }
    }

    componentDidMount () {
        let { id } = useParams();
        fetch(`http://localhost:5000/book_info/${id}`)
        .then(response =>{return response.json()})
        .then(data=>{
            let book= data.book[0];
            this.setState({book});
        })
        .catch(()=>{console.log("error couldn't fetch ")}) 
    }

    render () {
        return (
            <Cointainer>
            
            <h2>{book.rank}</h2>
            <div>
                <Image src={book.imageLink} />
                <h2>{book.name}</h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </Cointainer>

    )    
}
    
    
}
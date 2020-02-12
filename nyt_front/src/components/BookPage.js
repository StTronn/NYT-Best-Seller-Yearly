import React from 'react';
import styled from 'styled-components';


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

function BookPage(props) {
    let {book}=props;
    return (
        <Cointainer>
            <h2>{book.rank}</h2>
            <Image src={book.imageLink} />
            <h2>{book.name}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
        </Cointainer>

    )    


}
import React from 'react';
import styled from 'styled-components';


const Cointainer = styled.div`
    display:grid;
    margin :40px;
	height:40vh;
	width:20vw;
	grid-template-rows: 1fr 1fr;

`

const Heading1 = styled.h2`
       display:inline; 
`

const Image = styled.img  `
    height:18vh;    
`
//rank
//img
//name
//autor
//totalweeks 
//14
class BookCard extends React.Component {

    render() {
        let { book } = this.props;
        console.log(book);
        return (
            <Cointainer>
                <div>
                   <Heading1>{book.rank}</Heading1> 
                    <Image src={book.imageLink} />
                </div>
                <div>
                    <br />
                    <h2>{book.name}</h2>
                    <h2>{book.author}</h2>
                    <br />
                    <h3>{book.totalWeeks} weeks on list </h3>
                </div>
            </Cointainer>
        )
	}
}

export default BookCard;

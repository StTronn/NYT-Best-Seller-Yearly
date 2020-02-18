import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cointainer = styled.div`
  display: inline-grid;
  height: 65vh;
  margin: 20px;
  width: 20vw;
  grid-template-rows: 60px 1fr 1fr;
`;

const Heading1 = styled.div`
  margin-bottom: 10px;
`;
const Author = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

const Weeks = styled.span`
  font-weight: 400;
  font-size: 12px;
`;
const Image = styled.img`
  height: 100%;
`;
//rank
//img
//name
//autor
//totalweeks
//14
class BookCard extends React.Component {
  render() {
    let { book, id } = this.props;
    return (
      <Link to={"/" + id}>
        <Cointainer>
          <h2>{book.rank}</h2>
          <div>
            <Image src={book.imageLink} />
          </div>
          <div>
            <br />
            <Heading1>{book.name}</Heading1>
            <Author>{book.author}</Author>
            <br />
            <Weeks>{book.totalWeeks} weeks on list </Weeks>
          </div>
        </Cointainer>
      </Link>
    );
  }
}

export default BookCard;

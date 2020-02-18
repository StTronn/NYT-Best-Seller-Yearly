import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Cointainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-rows: 60vh auto;
`;

const Image = styled.img`
  height: 300px;
  margin-right: 40px;
  margin-bottom: auto;
`;

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    fetch(`http://localhost:5000/book_info/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let book = data[0];
        console.log(book);
        this.setState({ book });
      })
      .catch(() => {
        console.log("error couldn't fetch ");
      });
  }

  render() {
    let { book } = this.state;
    return (
      <div>
        {book && (
          <Cointainer>
            <h2>{book.rank}</h2>
            <div>
              <Image src={book.imageLink} />
              <h2>{book.name}</h2>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
            </div>
          </Cointainer>
        )}
      </div>
    );
  }
}

export default withRouter(BookPage);

import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Cointainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 5vw auto 40vw;
`;

const Rank = styled.div`
  display: grid;
  margin-left: 10px;
`;

const Image = styled.img`
  height: 200px;
  float: left;
  margin-right: 40px;
  margin-top: 20px;
  margin-bottom: 100%;
`;

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      readMore: false
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

  handleReadMore = () => {
    let { readMore } = this.state;
    readMore = !readMore;
    this.setState({ readMore });
  };

  render() {
    let { book, readMore } = this.state;
    let descSize = 0;
    let shortDesc = "";
    if (book) {
      console.log(book);
      descSize = book.description.length;
      shortDesc = book.description.slice(0, Math.min(180, descSize));
    }
    return (
      <div>
        {book && (
          <Cointainer>
            <Rank>
              <h2>{book.rank}</h2>
            </Rank>
            <div>
              <Image src={book.imageLink} />
              <h2>{book.name}</h2>
              <h3>{book.author}</h3>
              <p>
                {readMore ? book.description : shortDesc}
                <span onClick={this.handleReadMore}>
                  {readMore ? "  read less" : "  read more"}
                </span>
              </p>
            </div>
          </Cointainer>
        )}
      </div>
    );
  }
}

export default withRouter(BookPage);

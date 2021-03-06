import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import HeatMap from "./HeatMap";

const Cointainer = styled.div`
  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: 5vw auto 40vw;
`;

const Rank = styled.div`
  display: grid;
  margin-left: 10px;
`;

const Info = styled.div`
  padding-left: 40px;
`;

const Image = styled.img`
  height: 200px;
  float: left;
  margin-right: 40px;
  margin-top: 20px;
  margin-bottom: auto;
`;

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      heatmap: null,
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
        this.setState({ book });
      })
      .catch(() => {
        console.log("error couldn't fetch ");
      });

    fetch(`http://localhost:5000/heatmap/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let heatmap = data["list"];
        console.log(heatmap);
        this.setState({ heatmap });
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
            <Info>
              <h4>page count : {book.pageCount}</h4>
              <h4>score : {book.score}</h4>
              <h4>total weeks : {book.totalWeeks}</h4>
              <h4>first appearance : {book.firstDate}</h4>
            </Info>
          </Cointainer>
        )}
        <HeatMap data={this.state.heatmap} />
      </div>
    );
  }
}

export default withRouter(BookPage);

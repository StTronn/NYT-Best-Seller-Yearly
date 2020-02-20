import React from "react";
import styled from "styled-components";
import nyt from "../static/nyt.png";
import { Link } from "react-router-dom";

const Cointainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 12vh;
  width: 100%;
  color: white;
  background: black;
`;

const Image = styled.img`
  align-self: center;
  height: 60px;
  width: 60px;
`;

const H2 = styled.h2`
  align-self: center;
`;

export default function NavBar() {
  return (
    <Cointainer>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Image src={nyt} />
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <H2>Nyt Non Fiction 2018</H2>
      </Link>
    </Cointainer>
  );
}

import React from 'react';
import styled from 'styled-components';
import nyt from '../static/nyt.png';
const Cointainer= styled.div `
    display:grid;
    grid-template-columns: 1fr auto 1fr;
    height:12vh;
    width:100%;
    color:white;
    background:black;
`
const Image = styled.img `
    align-self:center;
    height:60px;
    width:60px;
`
const H2 = styled.h2 `
    align-self:center;
`

export default function NavBar () {
    return (
        <Cointainer>
            <Image src={nyt}/>
            <H2>Nyt Non Fiction 2018</H2>
        </Cointainer>

    ) 
} 

import React from 'react';
import BookCard from '../components/BookCard';
import styled from 'styled-components';



class YearlyList extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            books:[],
            page:0,
        }
    }

    componentDidMount(){
        this.getList();
    }
    
    getList = ()=> {
        let {page}=this.state;
        console.log ('getList');
        fetch(`http://localhost:5000/yearly_top/${page}`)
        .then(response =>{return response.json()})
        .then(data=>{
            let books= data.books;
            this.setState({books})
        })
        .catch(()=>{console.log("error couldn't fetch ")}) 
    }
    
    Prev = ()=> {
        let {page} = this.state;
        if (page>0)
            page-=1;
        this.setState({page},()=>{
            this.getList();
        });

    }

    Next = ()=> {
        console.log("hello next")
        let {page} = this.state;
        page+=1;
        this.setState({page},()=> {
            this.getList();
        })
    }

    render () {
        let {books,page} = this.state;
        return (
            <div>
            <Cointainer>
                {books.length !== 0 && 
                        books.map(book=>(
                            <BookCard book={book} key={book.id} id={book.id} />
                    ))
                }
            </Cointainer>
            <ButtonWrapper>
                <Prev onClick={this.Prev} disabled={!(page>0)}>&lt;</Prev>
                <Next onClick={this.Next}>&gt;</Next>
            </ButtonWrapper>
            </div>
        )
    }
} 

const Cointainer=styled.div `
    display:grid;
    margin-left:95px;
    align-content:center;
    justify-content:center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:auto;
`
const ButtonWrapper = styled.div `
    display:grid;
    grid-template-columns:1fr 1fr;
`
const Button = styled.button `
    width: 74px;
    height: 60px;
    text-align: center;
    display: inline-block;
    margin-top: 10px;
    padding-top: 2px;
    background-color: #f8f7f8;
    color: gray;
    font-size: 2.0em;
    font-weight: bold;
`
const Prev= styled(Button) `
    margin-left:auto;
    margin-right:10px; 
`
const Next= styled(Button) `
    margin-right:auto;
    margin-left:10px; 
`
export default YearlyList;

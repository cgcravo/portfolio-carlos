import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const ItemConstructor = ({ item}) => {

    return (
    <Container to={item.url}>   
        <img src={item.src} alt={item.projectName}/>
        <h2>{item.projectName}</h2>
        {/* <hr/> */}
        <h3>{item.description}</h3>
    </Container>
    )
}

const Container = styled(Link)`
    background-color: #b0adaa78;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
    width: 25%;
    height: 45vh;
    border-radius: 15px;
    position: relative;
    text-align: center;
    
    & img{
        width: 130px;
        position:absolute;
        top: -10px;
        border-radius: 10px;
        background-color: white;
    }

    & h2{
        font-size: 1.3em;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
        top: 40px;
        background-color: none;
        color: black;
    }

    & h3{
        width: 70%;
        color: gray;
        position: relative;
        font-style: italic;
        top: 50px;
        background-color: white;
    }
`

export default ItemConstructor;
import Navigator from "./Navigator.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {

    const[isTransparent, setIsTransparent] = useState(true);

    const scrollHandle = () => {
        if (window.pageYOffset > 0) {
            setIsTransparent(false)
            console.log(isTransparent)
        } else {
            setIsTransparent(true)
            console.log(isTransparent)
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', scrollHandle);
            
        return ()=>{window.removeEventListener('scroll', scrollHandle)}

    });

    return (
        <StyledHeader isTransparent={isTransparent}>
            <LogoContainer to={"/"}>
                <span>C</span>
                <span>S</span>
            </LogoContainer>
            <Navigator/>
        </StyledHeader>
    )
};

// when width < x make a ball for the navigators (hamburger)
// create a on/off button for the darkmode => change text and background colors when clicked
// dark mode on the right side of the navbar
// make the header sticky and fade when on top
const StyledHeader = styled.header`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.7s ease-in-out;
    background-color: ${( {isTransparent} ) => isTransparent ? `none` : `var(--header-bg-color)`};
    position: fixed;
    z-index: 10;

`;

const LogoContainer = styled(Link)`
    text-decoration: none;
    background-color: none;
    color: black;
    border: 2px solid black;
    width: 60px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    & span{
        font-size: 24px;
        font-family: var(--logo-font-family);
    }

`

export default Header;
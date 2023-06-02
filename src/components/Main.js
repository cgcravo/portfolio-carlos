import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Main = ( {children} ) => {


  return <Container className="main"> {children} </Container>
}

const Container = styled.main`
  width: 100%;
  background-color: white;
  min-height: 80vh;
  
  @media only screen and (max-width: 600px) {
  background-color: red;
  
}
`



export default Main;
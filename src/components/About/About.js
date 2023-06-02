import styled from "styled-components";
import React, { useEffect } from "react";

const About = () => {

  useEffect(()=>{ window.scrollTo(0, 0)}, []);

  return (
    <>
      <Image src={"assets/DSC_3810.jpg"} />
      <p>Hello world, this is the about page</p>

    </>
  
  )
}

const Image = styled.img`
  width: 100%;
  max-height: 100vh;
`

export default About;
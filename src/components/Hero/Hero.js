import styled from "styled-components";
import React, { useEffect } from "react";

const Hero = () => {

  useEffect(()=>{ window.scrollTo(0, 0)}, []);

  return (
    <>
      <Image src={"assets/DSC_3810.jpg"} />
      <SectionOne>
        <h1>Some pretty neat greeting</h1>
        <p>
          A very nice text explaining what I do a very nice text explaining what
          I do a very nice text explaining what I do a very nice text explaining
          what I do a very nice text explaining what I do a very nice text
          explaining what I do a very nice text explaining what I do a very nice
          text explaining what I do a very nice text explaining what I do a very
          nice text explaining what I do a very nice text explaining what I do a
          very nice text explaining what I do{" "}
        </p>
      </SectionOne>
      <SectionTwo>
        <LeftContainer>
        </LeftContainer>
        <RightContainer>
          <img src=""></img>
        </RightContainer>
      </SectionTwo>
      <SectionThree>
        <Text>
          <h2>Some very interesting subject</h2>
          <p>
            write something realy cool 1 write something realy cool 1 write
            something realy cool 1
          </p>
        </Text>
        <Text>
          <h2>Some nice subject</h2>
          <p>
            write something realy cool 2 write something realy cool 2 write
            something realy cool 2
          </p>
        </Text>
        <Text>
          <h2>Some interesting subject</h2>
          <p>
            write something realy cool 3 write something realy cool 3 write
            something realy cool 3
          </p>
        </Text>
      </SectionThree>
    </>
  );
};

const Image = styled.img`
  width: 100%;
  max-height: 100vh;
`

const SectionOne = styled.div`
  width: 100%;
  height: 60vh;
  text-align: center;
  font-size: 1.5em;

  & h1{
    font-size: 3em;
    font-weight: 700;
    margin: 1em 0;
  }
`
const SectionTwo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: beige;
  display: flex;
`

const LeftContainer = styled.div`
  width: 50%
`
const RightContainer = styled.div`
  width: 50%;
`

const SectionThree = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Text = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1em;

  & h2 {
    font-size: 1.5em;
    font-weight: 600;
    border-top: 0.12em solid black;
    margin-bottom: 1em;
  }
`

export default Hero;

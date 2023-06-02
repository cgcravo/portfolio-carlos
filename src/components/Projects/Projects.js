import styled from "styled-components";
import ProjectsList from "./ProjectsList";
import React, { useEffect } from "react";

const Projects = () => {

  useEffect(()=>{ window.scrollTo(0, 0)}, []);

  return (
    <>
      {/* <Image src={"assets/DSC_3810.jpg"} /> */}
      <ProjectsList />
    </>
  
  )
}

// const Image = styled.img`
//   width: 100%;
//   max-height: 100vh;
// `

export default Projects;
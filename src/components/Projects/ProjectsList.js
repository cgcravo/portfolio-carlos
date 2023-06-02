import styled from "styled-components";
import ItemConstructor from "./ItemConstructor";
import React from "react";


const ProjectsList = () => {


  //pass it to server in the future
  const itemList = [
    { projectName: "BEST GAME EVER", id: "nyan", src: "/assets/enemy.png", description: "Nyan x Burger", url: "https://github.com/cgcravo/project-js-nyan-cat"},
    {
      projectName: "",
      id: "project2",
      src: "/assets/construction.jpg",
      description: "under construction",
      url:""
    },
    {
      projectName: "",
      id: "project3",
      src: "/assets/construction.jpg",
      description: "under construction",
      url:""
    },
    {
      projectName: "",
      id: "project4",
      src: "/assets/construction.jpg",
      description: "under construction",
      url:""
    },
    {
      projectName: "",
      id: "project5",
      src: "/assets/construction.jpg",
      description: "under construction",
      url:""
    },
    {
      projectName: "",
      id: "project6",
      src: "/assets/construction.jpg",
      description: "under construction",
      url:""
    },
  ];

  return (
    <Container>
      {itemList.map((item) => {
        console.log(item);
        return <ItemConstructor key={item.id} item={item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5em;
`

export default ProjectsList;

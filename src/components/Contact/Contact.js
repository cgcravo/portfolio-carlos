import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import JobOffer from "./JobOffer";
import Freelancer from "./Freelancer";
// import SelectOption from "./SelectOption";



const Contact = () => {

  useEffect(()=>{ window.scrollTo(0, 0)}, []);

  // const joboffer = useRef(null);
  // const freelancer = useRef(null);

  const [radio, setRadio] = useState(null);
  // console.log(checkBox);

  const [formData, setFormData] = useState({});

  // const navigate = useNavigate();

  // useEffect(()=>{

  //   if(joboffer.current.checked){freelancer.current.checked = false}

  //   if(freelancer.current.checked){joboffer.current.checked = false}

  //   // if(formData === "joboffer"){
  //   //   //get freela reference and uncheck it
  //   // } else if (formData === "freelancer") {
  //   //   //get joboffer reference and uncheck it
  //   //   // checked = false
  //   // }
  // }, [formData])

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const body = { formData };
    // fetch("/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((parsed) => {
    //     if (parsed.status === 200) {
    //       send a message of success
    //       navigate(`/`);
    //     } else {
    //       throw new Error(parsed.message);
    //     }
    //   })
    //   .catch((error) => {
    //     window.alert(error);
    //   });
  };

  return (
    <>
    <Image src={"assets/DSC_2841.jpg"} />

    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="freela">
            Freelancer
            <input
              type="radio"
              id="freela"
              name="job"
              value="freelancer"
              onChange={(event) => {setRadio("freelancer"); handleChange(event.target.id, event.target.value)}}
              // ref={freelancer}
            />
          </label>

          <label htmlFor="offer">
            Job Offer
            <input
              type="radio"
              id="offer"
              name="job"
              value="joboffer"
              onChange={(event) => {setRadio("joboffer"); handleChange(event.target.id, event.target.value)}}
              // ref={joboffer}
            />
          </label>
        </div>

        {radio === "freelancer" && (
          <Freelancer handleChange={handleChange} />
        )}
        {radio === "joboffer" && <JobOffer handleChange={handleChange} />}

        <button type="submit">Submit</button>
      </Form>
    </Container>
    </>);
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 60%;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  && input {
    width: 40%;
    height: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 100vh;
`

export default Contact;

import React from "react";

const JobOffer = ({handleChange}) => {
  //re-do it with map
  return (<>
    <label htmlFor="fname">
          First Name:{" "}
          <input
            type="text"
            id="fname"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </label>

        <label htmlFor="lname">
          Last Name:{" "}
          <input
            type="text"
            id="lname"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </label>

        <label htmlFor="company">
          Address:{" "}
          <input
            type="text"
            id="company"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </label>

        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </label>

        <label htmlFor="phone">
          Phone:{" "}
          <input
            type="phone"
            id="phone"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </label>
  </>)
}

export default JobOffer;
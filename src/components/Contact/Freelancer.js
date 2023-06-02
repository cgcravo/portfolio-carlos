import React from "react";

const Freelancer = ({handleChange}) => {
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

        <label htmlFor="textarea">
          Brief description of the project
          <input
            type="textarea"
            id="text-area"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </label>
  </>)
}

export default Freelancer;
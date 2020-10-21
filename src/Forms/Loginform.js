import React, { useState } from "react";
import "./Input.css";
import { lastName } from "../component/Module";

const Loginform = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastnameNew] = useState("");
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setLastname(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastnameNew(lastName);
  };
  return (
    <div className="submitform" style={{ backgroundColor: "blue" }}>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {fullName} {lastNamenew}
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            value={name}
            style={{ width: "40em" }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEventTwo}
            value={lastName}
            style={{ width: "40em" }}
          />
          <br />
          <button type="submit" style={{ marginLeft: "10em" }}>
            Submit Me 👍
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loginform;

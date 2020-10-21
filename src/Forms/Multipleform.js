import React, { useState } from "react";
import "./Input.css";

const Multipleform = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // const name = event.target.value;
    // const value = event.target.name;
    const { name, value } = event.target;
    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
      //   if (name === "fName") {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //     };
      //   }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <div className="submitform" style={{ backgroundColor: "pink" }}>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello Multiple {fullName.fname} {fullName.lname}
          </h1>
          <input
            style={{ width: "40em" }}
            type="text"
            placeholder="Enter Your Name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <input
            style={{ width: "40em" }}
            type="text"
            placeholder="Enter Your Name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
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

export default Multipleform;

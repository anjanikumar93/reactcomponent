import React, { useState, useEffect } from "react";

const Effecthook = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // alert("I am effecthook");
    console.log("hello useEffect");
  });

  return (
    <>
      <h1>This is effect hook</h1>
      <button
        type="button"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        click me {number}
      </button>
    </>
  );
};

export default Effecthook;

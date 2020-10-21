import React, { useState } from "react";
import "./Handling.css";

const Handling = () => {
  let purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me 💗");
  const bgChange = () => {
    // console.log("clicked");
    let newBg = "#34495e";
    setBg(newBg);
    setName("Oh My God 🥵");
  };

  const bgBack = () => {
    setBg(purple);
    setName("good morning 😄");
  };
  return (
    <div className="handlingEvent" style={{ backgroundColor: bg }}>
      <p>Hello Event Handling 💗</p>
      <button
        type="button"
        className="buttonChange"
        onClick={bgChange}
        onDoubleClick={bgBack}
      >
        {name}
      </button>
    </div>
  );
};

export default Handling;

import React, { useState } from "react";

const currenttime = {
  textAlign: "center",
  fontSize: "2em",
  color: "red",
};

function Times() {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);
  const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return (
    <div style={currenttime}>
      <p>Hello Times {ctime}</p>
      <button onClick={updateTime}>Current Time</button>
    </div>
  );
}

export default Times;

import React, { useState } from "react";

const Digitalwatch = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div>
      <h1>This is digital watch</h1>
      <h1 style={{ textAlign: "center" }}>{ctime}</h1>
    </div>
  );
};

export default Digitalwatch;

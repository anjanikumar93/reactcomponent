import React from "react";

function Currenttime() {
  let curDate = new Date(2020, 10, 15, 17);
  curDate = curDate.getHours();
  const mystyle = {};

  let importantText = "";
  if (curDate >= 1 && curDate < 12) {
    importantText = "good morning";
    mystyle.color = "green";
  } else if (curDate >= 12 && curDate < 17) {
    importantText = "Good Afternoon";
    mystyle.color = "blue";
  } else {
    importantText = "Good Night";
    mystyle.color = "red";
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        hello sir <span style={mystyle}>{importantText}</span>
      </h3>
    </div>
  );
}

export default Currenttime;

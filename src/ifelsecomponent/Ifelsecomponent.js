import React from "react";
import "./Ifelsecomponent.css";
import Ifelsedata from "./Ifelsedata";
import Engineer from "./Engineer";

console.log(Ifelsedata);

const Displaycard = (props) => {
  return (
    <div>
      <p>Display card</p>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={props.srcimg}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{props.name}</h1>
            <p>{props.title}</p>
            <p>{props.behiver}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobtitle = "Engineer";

function Ifelsecomponent() {
  if (Jobtitle === "Engineer") {
    return (
      <div className="cardcondition">
        <p>Hello if else components 💌 </p>
        <Engineer />
        <Displaycard
          srcimg={Ifelsedata[0].srcimg}
          name={Ifelsedata[0].name}
          title={Ifelsedata[0].title}
          behiver={Ifelsedata[0].behiver}
        />
      </div>
    );
  } else {
    return (
      <div className="cardcondition">
        <p>Hello if else components</p>
        <Engineer />
        <Displaycard
          srcimg={Ifelsedata[1].srcimg}
          name={Ifelsedata[1].name}
          title={Ifelsedata[1].title}
          behiver={Ifelsedata[1].behiver}
        />
      </div>
    );
  }
}
export default Ifelsecomponent;

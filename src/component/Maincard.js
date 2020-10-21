import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.firstImg} alt={props.altvalue} />
      <div className="container">
        <h4>
          <b>{props.firstName}</b>
        </h4>
        <p>{props.firstEngineer}</p>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "./Cardmap.css";
import Mapdata from "./Mapdata";

function Cardvalue(props) {
  return (
    <div className="card" style={{ width: "20em" }}>
      <img src={props.image} alt="John" style={{ width: "100%" }} />
      <h1>{props.name}</h1>
      <p className="title">{props.title}</p>
      <p>{props.college}</p>
      <div style={{ margin: "24px 0" }}>
        <a href="#">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      <p>
        <button>{props.contact}</button>
      </p>
    </div>
  );
}

function Cardmap() {
  return (
    <div>
      <p>Hello card map</p>
      <div className="allcardGroup">
        {Mapdata.map((val, index) => {
          return (
            <Cardvalue
              key={val.id}
              image={val.image}
              name={val.name}
              title={val.title}
              college={val.college}
              contact={val.contact}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cardmap;

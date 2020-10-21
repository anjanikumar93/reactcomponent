import React from "react";
import Maincard from "./Maincard";
import Carddata from "./Carddata";
import "./Mycard.css";

// console.log(Carddata[0]);
const multipleCard = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around ",
};

function Mycard() {
  return (
    <div className="cardGroup" style={multipleCard}>
      <Maincard
        firstImg="https://picsum.photos/seed/picsum/200/300"
        firstName="John Doe"
        firstEngineer="Architect & Engineer"
        altvalue="Avtar"
      />
      <Maincard
        firstImg="https://picsum.photos/200/300?grayscale"
        firstName="Anjani Kumar"
        firstEngineer="Architect & Engineer"
        altvalue="Avtar"
      />
      <Maincard
        firstImg="https://picsum.photos/200/300/?blur"
        firstName="Abhishek Raj"
        firstEngineer="Architect & Engineer"
        altvalue="Avtar"
      />
      <Maincard
        firstImg="https://picsum.photos/200/300/?blur=2"
        firstName="Abhishek Raj"
        firstEngineer="Architect & Engineer"
        altvalue="Avtar"
      />

      <Maincard
        firstImg={Carddata[0].firstImg}
        firstName={Carddata[0].firstName}
        firstEngineer={Carddata[0].firstEngineer}
      />
      <Maincard
        firstImg={Carddata[1].firstImg}
        firstName={Carddata[1].firstName}
        firstEngineer={Carddata[1].firstEngineer}
      />
    </div>
  );
}

export default Mycard;

import React from "react";
import Heading from "./component/Heading";
import "./App.css";
import Paragraph from "./component/Paragraph";
import List from "./component/List";
import firstName, {
  lastName,
  fullName,
  myName,
  myHome,
} from "./component/Module";
import {
  Add,
  Subtraction,
  Multiplication,
  Division,
} from "./component/Calculator";
import Mycard from "./component/Mycard";
import Cardmap from "./mapcomponent/Cardmap";
import Ifelsecomponent from "./ifelsecomponent/Ifelsecomponent";
import Hooks from "./hooks/Hooks";
import Times from "./hooks/Times";
import Digitalwatch from "./hooks/Digitalwatch";
import Handling from "./events/Handling";
import Input from "./Forms/Input";
import Loginform from "./Forms/Loginform";
import Multipleform from "./Forms/Multipleform";
import Todoapp from "./Todoapp/Todoapp";
import Increment from "./increment/Increment";
import Component from "./context/Component";
import Usecontext from "./usecontext/Usecontext";
import Effecthook from "./effecthook/Effecthook";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/200/300/?blur";

function App() {
  return (
    <div className="app">
      <div className="datetime">
        <h2>I am Anjani Kumar</h2>
        <p>current Date is {currentDate}</p>
        <p>current Time is {currentTime}</p>
      </div>

      <div className="imggroup">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img1} />
      </div>

      <Heading />
      <Paragraph />
      <List />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{fullName}</p>
      <p>{myName()}</p>
      <p>{myHome()}</p>
      <p>calculator {Add(30, 30)}</p>
      <p>calculator {Subtraction(30, 30)}</p>
      <p>calculator {Multiplication(30, 30)}</p>
      <p>calculator {Division(30, 30)}</p>
      <div>
        <Mycard />
      </div>
      <br />
      <Cardmap />
      <Ifelsecomponent />
      <br />
      <Hooks />
      <Times />
      <Digitalwatch />
      <br />
      <Handling />
      <Input />
      <br />
      <Loginform />
      <br />
      <Multipleform />
      <br />
      <Todoapp />
      <br />
      <Increment />

      <br />
      <Component />
      <br />
      <Usecontext />
      <br />
      <Effecthook />
    </div>
  );
}

export default App;

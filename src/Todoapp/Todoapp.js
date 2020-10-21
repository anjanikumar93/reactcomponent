import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Todolist from "./Todolist";
import "./Todoapp.css";

const Todoapp = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("hello delete items");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="todo_heading">ToDo List</h1>
          <div className="input_buttongroup">
            <input
              type="text"
              className="todo_input"
              value={inputList}
              onChange={itemEvent}
            />
            <button type="button" className="add_button" onClick={listOfItems}>
              <AddIcon />
            </button>
          </div>
          <ul className="order_list">
            {/* <li className="list_count">{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todoapp;

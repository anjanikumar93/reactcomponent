import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import "./Increment.css";

const Increment = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const numberIncrement = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const numberDecrement = () => {
    if (currentNumber > 0) {
      setCurrentNumber(currentNumber - 1);
    } else {
      setCurrentNumber(0);
      alert("zero is last number");
    }
  };
  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1 className="countNumber">{currentNumber}</h1>
          <div className="buttonGroup">
            <Button
              type="button"
              variant="contained"
              color="primary"
              className="incrment_button"
              onClick={numberIncrement}
            >
              <AddIcon />
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className="decrement_button"
              onClick={numberDecrement}
            >
              <RemoveIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Increment;

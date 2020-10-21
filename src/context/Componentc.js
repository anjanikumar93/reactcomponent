import React from "react";
import { FirstName, LastName } from "./Component";

const Componentc = () => {
  return (
    <>
      <div>
        <FirstName.Consumer>
          {(fname) => {
            return (
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <div>
                      <p>
                        My name is {fname} {lname}
                      </p>
                    </div>
                  );
                }}
              </LastName.Consumer>
            );
          }}
        </FirstName.Consumer>
      </div>
    </>
  );
};

export default Componentc;

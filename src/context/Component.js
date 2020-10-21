import React, { createContext } from "react";
import Componenta from "./Componenta";

const FirstName = createContext();
const LastName = createContext();

const Component = () => {
  return (
    <>
      <div>
        <FirstName.Provider value={"Anjnai"}>
          <LastName.Provider value={"Kumar"}>
            <Componenta />
          </LastName.Provider>
        </FirstName.Provider>
      </div>
    </>
  );
};

export default Component;
export { FirstName, LastName };

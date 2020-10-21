import React, { createContext } from "react";
import Usecontexta from "./Usecontexta";

const FirstName = createContext();
const LastName = createContext();

const Usecontext = () => {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <FirstName.Provider value={"Anjnai"}>
          <LastName.Provider value={"Kumar"}>
            <Usecontexta />
          </LastName.Provider>
        </FirstName.Provider>
      </div>
    </>
  );
};

export default Usecontext;
export { FirstName, LastName };

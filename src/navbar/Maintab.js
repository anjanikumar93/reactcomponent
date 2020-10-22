import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Navbar from "./Navbar";

const Maintab = () => {
  return (
    <>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
};

export default Maintab;

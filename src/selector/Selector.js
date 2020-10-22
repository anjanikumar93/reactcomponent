import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Selector.css";

const Selector = () => {
  const [num, setNumber] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    // alert("hello man");
    async function getData() {
      const responseData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/1`
      );
      console.log(responseData.data);
      setName(responseData.data.name);
      setMoves(responseData.data.moves.length);
      setId(responseData.data.id);
    }
    getData();
  });
  return (
    <>
      <div className="select_data">
        <h1>select value {num}</h1>
        <h1>select name {name}</h1>
        <h1>select moves {moves}</h1>
        <h1>select id {id}</h1>
        <select
          className="selector_size"
          value={num}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </>
  );
};

export default Selector;

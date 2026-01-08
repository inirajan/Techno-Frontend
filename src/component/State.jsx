import React, { useEffect, useState } from "react";
import Card from "./Card";

const State = () => {
  const [name, setName] = useState("Nirajan");
  const [age, setAge] = useState(19);

  const [count, setCount] = useState(0);

  useEffect(() => {
    // this function is called on change in state(based on dependency)
    console.log("useEffect is called.");

    if (count < 10) return;
  }, [name, age, count]);

  const updateName = () => {
    setName("Shishir");
  };

  const updateAge = () => {
    setAge(20);
  };
  return (
    <>
      <h1>Name : {name}</h1>
      <button onClick={updateName}>Change Name</button>
      <br />
      <h2>Age: {age} </h2>

      <button onClick={updateAge}> Change Age</button>

      <h2>count: {count} </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>
    </>
  );
};

export default State;

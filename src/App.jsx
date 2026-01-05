import React from "react";
import Card from "./component/Card";

const App = () => {
  const name = "Ram";
  const age = 20;
  const students = ["Ram", "Hari", "Sita"];

  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      {students.map((student) => {
        <Card title={student} subtitle={"students"} />;
      })}

      <Card title={"Card 1"} subtitle={"This is card 1"} />
      <Card title={"Card 2"} subtitle={"This is card 2"} />
      <Card title={"Card 3"} subtitle={"This is card 3"} />
      <Card title={"Card 4"} subtitle={"This is card 4"} />
    </>
  );
};

export default App;

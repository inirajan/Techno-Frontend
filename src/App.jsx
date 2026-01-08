import React from "react";
import Card from "./pages/Card";
import State from "./component/State";

const App = () => {
  const name = "Ram";
  const age = 20;
  const students = ["Ram", "Hari", "Sita"];

  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      {/* <button
        onClick={() => {
          setStudents(["naruto", "hinata", "sakura"]);
        }}
      >
        Fetech Students
      </button> */}

      <State />

      {students.map((student) => {
        <Card title={student} subtitle={"students"} />;
      })}
    </>
  );
};

export default App;

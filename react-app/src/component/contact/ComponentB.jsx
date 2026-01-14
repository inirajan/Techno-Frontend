import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ count }) => {
  return (
    <div className=" w-full py-10 bg-green-100 px-20">
      <h1 className="text-3xl py-5"> Component A</h1>

      <ComponentC count={count} />
    </div>
  );
};

export default ComponentB;

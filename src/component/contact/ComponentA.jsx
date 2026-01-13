import React from "react";
import ComponentB from "./componentB";

const ComponentA = ({ counts }) => {
  const [count, setCount] = setState(0);
  return (
    <div className=" w-full py-10 bg-red-100 px-20">
      <h1 className="text-3xl py-5"> Component A</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-200 tex-white py-5 px-1"
      >
        Count +
      </button>
      <ComponentB count={counts} />
    </div>
  );
};

export default ComponentA;

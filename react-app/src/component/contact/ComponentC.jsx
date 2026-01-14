import React from "react";

const ComponentC = ({ count }) => {
  return (
    <div className=" w-full py-10 bg-blue-100 px-20">
      <h1 className="text-3xl py-5"> Component C</h1>
      <p className="text-xl py-5">Count:{count} </p>
    </div>
  );
};

export default ComponentC;

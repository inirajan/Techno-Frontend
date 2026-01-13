"use client"; // making client (this directive(use client) will make the component Client component)

import { useState } from "react";
import ComponentC from "./ComponentC";

const ClientComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="py-10 border">
      <h2 className="text-5xl">Client Component</h2>
      <button
        onClick={() => setCount(count + 1)}
        className=" bg-green-600 px-2 py-1 ml-2  text-white border-0 rounded-xl "
      >
        Click me
      </button>
      <h2 className=" ml-8 text-2xl text-red-200">{count}</h2>

      <ComponentC />
    </div>
  );
};

export default ClientComponent;

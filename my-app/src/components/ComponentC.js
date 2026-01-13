import React, { useEffect, useState } from "react";

const ComponentC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className="bg-amber-500">
      Component C
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentC;

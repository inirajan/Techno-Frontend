import React from "react";

const Card = ({ title, subtitle }) => {
  return (
    <>
      <div
        style={{
          margin: "10px",
          padding: "30px",
          background: "lightgreen",
          height: "200px",
          width: "200px",
          borderRadius: "15px",
        }}
      >
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
    </>
  );
};

export default Card;

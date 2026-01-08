import React, { useState } from "react";

const Card = ({ title, subtitle }) => {
  const [isLiked, setIsLiked] = useState(false);
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
        <h2>{isLiked ? "Liked" : "notLiked"}</h2>
        <button
          onClick={() => {
            setIsLiked(true);
          }}
        >
          Like
        </button>
      </div>
    </>
  );
};

export default Card;

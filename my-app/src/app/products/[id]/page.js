import React from "react";

const ProductByIdPage = async ({ params }) => {
  const id = (await params).id;
  console.log(await params);
  return (
    <>
      <div className="text-7xl">ProductByIdPage</div>
      <h1 className="text-4xl"> Product of id:{id}</h1>
    </>
  );
};

export default ProductByIdPage;

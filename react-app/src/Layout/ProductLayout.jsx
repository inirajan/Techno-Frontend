import React from "react";
import { Outlet } from "react-router";

const ProductLayout = () => {
  return (
    <>
      <h2>Images links</h2>

      <Outlet />
    </>
  );
};

export default ProductLayout;

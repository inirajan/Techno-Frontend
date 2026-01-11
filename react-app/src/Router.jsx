import About from "./pages/About";
import App from "./App";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import MainLayout from "./Layout/MainLayout";
import Product from "./pages/Product";
import ProductLayout from "./Layout/ProductLayout";
import ProductsDetailsPage from "./pages/ProductsDetails";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route group  */}
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<ProductsDetailsPage />} />
          </Route>
        </Route>

        <Route path="auth">
          <Route path="login" element={"login page"} />
          <Route path="register" element={"register page"} />
        </Route>

        <Route path="*" element={"404 Page not found."} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

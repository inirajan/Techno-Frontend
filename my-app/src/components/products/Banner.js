import React from "react";
import { FaGift } from "react-icons/fa";

const ProductsBanner = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="bg-linear-to-r form-primary/90-to-secondary w-full h-64 rounded">
          <div>
            <span>Black friday sale</span>
            <h2>20% off every Product</h2>
            <button>Buy Now</button>
          </div>
          <div>
            <FaGift />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;

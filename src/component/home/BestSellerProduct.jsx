import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const BestSellerProduct = ({
  name,
  decs,
  reviews,
  price,
  originalPrice,
  discountRate,
  imgUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center p-8 lg:p-12">
        <span className="bg-gray-200 bg-opacity-20 rounded-2xl w-max px-4 py-1 text-xs text-white font-medium">
          Featured Product
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-2">
          {name}
        </h2>
        <p className="text-blue-100 mb-6">{decs}</p>
        <div className="flex mb-4 items-center">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-sm ml-2 text-gray-200"> {reviews} </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-semibold text-white">${price} </span>
          <span className="text-xl text-blue-200 line-through ml-1">
            ${originalPrice}
          </span>
          <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
            {discountRate}
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="bg-white text-primary hover:underline px-6 py-2 rounded-lg font-semibold transition duration-300">
            Buy Now <FaShoppingCart />
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <img src={imgUrl} alt className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default BestSellerProduct;

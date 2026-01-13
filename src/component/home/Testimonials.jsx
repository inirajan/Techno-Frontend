import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = ({ imgUrl, name, review }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <div className="flex items-center mb-4 space-x-4">
        <img src={imgUrl} alt className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-xl text-gray-800 dark:text-gray-100">
            {name}
          </h4>
          <div className="flex text-yellow-500 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-justify">{review}</p>
    </div>
  );
};

export default Testimonials;

import React from "react";

const CallToAction = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Stay updated with Tech products
      </h2>
      <p className="text-blue-100 max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto
        excepturi fugit aliquid labore exercitationem molestias
      </p>
      <div className="flex mx-auto max-w-md">
        <input
          type="email"
          placeholder="Your email address"
          className="rounded-l-lg px-4 py-3 focus:outline-none flex-grow"
        />
        <button className="bg-secondary dark:bg-primary rounded-r-lg text-white px-6 py-3 font-medium hover:bg-gray-800 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

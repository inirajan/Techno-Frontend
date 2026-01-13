import React from "react";
import Hero from "./component/home/Hero";
import WhyChooseUsCard from "./component/home/WhyChooseUsCard";
import { Link } from "react-router";
import {
  FaCreditCard,
  FaShippingFast,
  FaReply,
  FaHeadset,
} from "react-icons/fa";
import ProductCard from "./component/home/ProductCard";
import BestSellerProdcut from "./component/home/BestSellerProduct";
import Testimonials from "./component/home/Testimonials";
import CallToAction from "./component/home/CallToAction";

const App = () => {
  return (
    <>
      <Hero />

      {/* Why Shop With Us */}
      <section className="dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseUsCard
              title="Free Shipping"
              subtitle=" Free Shipping for all orders over Rs.500. Fast delivery service to your
        doorstep."
              icon={<FaShippingFast className=" text-2xl text-primary" />}
              iconBg="bg-blue-100"
            />

            <WhyChooseUsCard
              title="Secure Payment"
              subtitle="Your payment information is safe with our encrypted system."
              icon={<FaCreditCard className="text-2xl text-green-500" />}
              iconBg="bg-blue-100"
            />

            <WhyChooseUsCard
              title="24/7 Support"
              subtitle="Our customer support team is available around the clock to help
                you."
              icon={<FaHeadset className="text-2xl text-orange-500" />}
              iconBg="bg-orange-100"
            />

            <WhyChooseUsCard
              title="Easy Return"
              subtitle="Hassle free return policy. Just let us know if you are not satisfied with our product.  "
              icon={<FaReply className="text-2xl text-red-500" />}
              iconBg="bg-red-100"
            />
          </div>
        </div>
      </section>

      {/* Propular Product Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Popular Products
            </h2>
            <Link to="/product" className="text-primary hover:text-secondary">
              View all
            </Link>
          </div>

          <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card  */}
            <ProductCard
              name="Iphone 17 Pro Max"
              imgUrl="https://images.unsplash.com/photo-1759588071895-6b5efd5502af?q=80&w=800"
              price="999"
              originalPrice="1299"
              ratingsCount="259"
              badge={
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Sale
                </span>
              }
            />

            <ProductCard
              name="Wireless Headphone"
              imgUrl="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=800"
              price="399"
              originalPrice="599"
              ratingsCount="29"
              badge={
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Popular
                </span>
              }
            />

            <ProductCard
              name="Apple Watch"
              imgUrl="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800"
              price="899"
              originalPrice="999"
              ratingsCount="59"
              badge={
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Top Rated
                </span>
              }
            />

            <ProductCard
              name="Samsung S25 Ultra"
              imgUrl="https://images.unsplash.com/photo-1738830246146-599b67d009db?q=80&w=800"
              price=" 899"
              originalPrice="1599"
              ratingsCount="569"
              badge={
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Most Sold
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* Best seller  */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <BestSellerProdcut
              name="MacBook Air M4"
              decs=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            molestias voluptates error quidem, doloribus impedit adipisci
            cumque commodi obcaecati voluptatem."
              reviews="5/5 from 1,536 reviews"
              price="1299"
              originalPrice="1599"
              discountRate="20% OFF"
              imgUrl="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800"
            />
          </div>
        </div>
      </section>

      {/* Testimonials  */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonials
              imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128"
              name="John Doe"
              review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                     aperiam, excepturi quia ea dolorem eaque nobis doloribus aliquam, illo
                    est voluptatum nam alias ex! Quia iste debitis repellendus porro a hic,
                    repudiandae perferendis voluptatibus nobis, perspiciatis magnam non at
                    laudantium error ipsa ad neque illum tempore quo ex. Sunt, illum?"
            />

            <Testimonials
              imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128"
              name="John Doe"
              review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                     aperiam, excepturi quia ea dolorem eaque nobis doloribus aliquam, illo
                    est voluptatum nam alias ex! Quia iste debitis repellendus porro a hic,
                    repudiandae perferendis voluptatibus nobis, perspiciatis magnam non at
                    laudantium error ipsa ad neque illum tempore quo ex. Sunt, illum?"
            />

            <Testimonials
              imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128"
              name="John Doe"
              review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                     aperiam, excepturi quia ea dolorem eaque nobis doloribus aliquam, illo
                    est voluptatum nam alias ex! Quia iste debitis repellendus porro a hic,
                    repudiandae perferendis voluptatibus nobis, perspiciatis magnam non at
                    laudantium error ipsa ad neque illum tempore quo ex. Sunt, illum?"
            />
          </div>
        </div>
      </section>

      {/* Call to Action  */}
      <section className="bg-primary py-12 dark:bg-secondary">
        <CallToAction />
      </section>
    </>
  );
};

export default App;

import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaLaptop,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <FaLaptop /> Techno
            </h4>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              cum. Doloribus cumque molestias corporis optio nihil sunt hic,
              iure nobis!
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook />
              </Link>

              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </Link>

              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick links</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About
              </Link>
              <Link
                to="/products"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Products
              </Link>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privary Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Support Center
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">We Accept</h4>
            <div className="flex gap-2">
              <div className="bg-white px-2 py-1 rounded">
                <FaCcVisa className=" text-2xl text-blue-800" />
              </div>
              <div className="bg-white px-2 py-1 rounded">
                <FaCcMastercard className="text-2xl text-red-600" />
              </div>
              <div className="bg-white px-2 py-1 rounded">
                <FaCcPaypal className=" text-2xl text-blue-600" />
              </div>
              <div className="bg-white px-2 py-1 rounded">
                <FaCcApplePay className=" text-2xl text-black" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center border-t pt-8 text-gray-400">
          © 2025 Techno. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-black font-semibold"
      : "text-gray-600 hover:text-yellow-500 transition";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://i.ibb.co/yYC4D4n/logo-1.png"
              alt="HotelFinder Logo"
              className="w-24 sm:w-28 md:w-32"
            />
          </Link>
        </div>

        {/* Toggle Button for Small Screens */}
        <button
          id="menu-button"
          className="block lg:hidden text-gray-600 hover:text-yellow-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          id="menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:space-x-6 lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 w-full lg:w-auto">
            <li>
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/rooms" className={getLinkClass("/rooms")}>
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/blog" className={getLinkClass("/blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/page" className={getLinkClass("/page")}>
                Page
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className="px-4 py-2 text-gray-800 rounded-md border border-gray-300 hover:bg-gray-100">
            Login / Signup
          </button>
          <a href="/rooms">
            <button
              style={{ backgroundColor: "#CEAF83" }}
              className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
            >
              Reservation
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

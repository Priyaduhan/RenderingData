import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#343e55] text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 flex items-center justify-between">
          {/* Left side - Logo or Brand (optional) */}
          <div className="text-lg font-bold">MyStore</div>

          {/* Right side - Links */}
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="hover:scale-105 hover:text-yellow-300 transition duration-200 cursor-pointer">
              Home
            </div>
            <div className="hover:scale-105 hover:text-yellow-300 transition duration-200 cursor-pointer">
              About
            </div>
            <Link to="/">
              <div className="hover:scale-105 hover:text-yellow-300 transition duration-200 cursor-pointer">
                ViewItems
              </div>
            </Link>
            <Link to="/add">
              <div className="hover:scale-105 hover:text-yellow-300 transition duration-200 cursor-pointer">
                AddItem
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

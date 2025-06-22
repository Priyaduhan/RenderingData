import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-[#343e55] h-[3rem] text-white font-medium items-center justify-around shadow-md">
      <Link to="/">
        <div className="transition transform hover:scale-110 hover:text-yellow-300 duration-200 cursor-pointer">
          ViewItems
        </div>
      </Link>
      <Link to="/add">
        <div className="transition transform hover:scale-110 hover:text-yellow-300 duration-200 cursor-pointer">
          AddItem
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

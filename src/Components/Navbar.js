import React from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="text-thin">
      <div className="w-full h-10 bg-black text-white flex justify-end items-center p-2">
        <button type="button" className="pr-4 outline-none">
          SIGN IN
        </button>{" "}
        | <button className="pl-4 pr-10 outline-none">SIGN UP</button>
      </div>
      <div className="bg-white py-2 text-black px-8 flex items-center justify-evenly">
        <button>
          <a href="/">
            <img src={logo} alt="logo" className="w-50 h-20 " />
          </a>
        </button>
        <div className="border-2 flex flex-row items-center justify-center ">
          <FaSearch size={20} color="grey" className="opacity-40 mx-2" />
          <input
            type="text"
            placeholder="Enter a search term"
            className="outline-none"
          />{" "}
          <div className="mx-auto">
            <span className=" opacity-40 border-r  border-gray-500"></span>
          </div>
          <MdOutlineLocationOn
            size={20}
            color="grey"
            className="opacity mx-2 animate-bounce"
          />
          <input
            type="text"
            placeholder="UK, town or postcode"
            className="outline-none"
          />
          <button
            type="button"
            className="p-2 w-32 font-thin bg-black text-white outline-none"
          >
            SEARCH
          </button>
        </div>
        <div>
          <button
            className="p-2 text-white outline-none w-56"
            type="button"
            style={{ backgroundColor: "#d53078" }}
          >
            ADD YOUR BUSINESS
          </button>
        </div>
        <button type="button" className="font-thin flex flex-row items-center">
          {/* <div className="flex flex-row items-center"> */}
          MENU
          <GiHamburgerMenu size={20} className="ml-1" />
          {/* </div> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

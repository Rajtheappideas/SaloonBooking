import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Sidebar } from "./index";
import useUserdata from "../hooks/useUserdata";
import { useUserContext } from "../context/user_context";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogout } = useUserdata();
  const { userData } = useUserContext();
  const userEmail = userData?.yu?.nv;
  return (
    <nav className="text-thin">
      <div
        className={`w-full h-10 bg-black text-white flex ${
          userData ? "justify-between" : "justify-end"
        }  items-center p-2`}
      >
        {" "}
        {userData ? (
          <>
            <p >You logged in as <span className="text-green-400">{userEmail}</span></p>
            <button
              type="button"
              className="text-center px-2 outline-none tracking-wider bg-white text-black"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <button type="button" className="pr-4 outline-none border-r-2">
              <Link to="/signin">SIGN IN</Link>
            </button>
            <button className="pl-4 pr-10 outline-none">
              <Link to="/signup">SIGN UP</Link>
            </button>
          </div>
        )}
      </div>
      <div className="bg-white py-2 text-black px-8 flex flex-col lg:flex-row md:flex-col items-center justify-evenly">
        <button>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="object-cover object-center w-50 h-20 my-3"
            />
          </Link>
        </button>
        <div className="border-2 hidden lg:flex md:flex items-center justify-center mb-3 lg:mb-0">
          <FaSearch size={20} color="grey" className="opacity-40 mx-2" />
          <input
            type="text"
            placeholder="Enter a search term"
            className="outline-none border-r-2"
          />{" "}
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
        <div className="mb-3 lg:mb-0">
          <button
            className="p-2 text-white outline-none lg:w-56 w-48"
            type="button"
            style={{ backgroundColor: "#d53078" }}
          >
            ADD YOUR BUSINESS
          </button>
        </div>
        <div className="flex">
          <button className="uppercase text-base mr-3">menu</button>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="items-center"
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
        <Sidebar open={isOpen} close={() => setIsOpen(false)}></Sidebar>
      </div>
      <hr className="border-t-4 border-pink-500" style={{ color: "#d53078" }} />
    </nav>
  );
};

export default Navbar;

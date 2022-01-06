import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white " style={{ backgroundColor: "#d53078" }}>
      <div className="p-14 items-center">
        <div className=" flex items-center justify-between pb-5">
          <div className="flex flex-row items-center ">
            <div>
              <img src={logo} alt="logo" className=" w-auto h-20 " />
            </div>
            <div className="ml-4 tracking-widest">
              <button className="text-lg mb-2" type="button">
                <span>Sign up</span>
              </button>{" "}
              <span className="text-lg "> to our Newsletter</span>
              <hr className="w-16 " />
              <span className="text-xs tracking-wide  ">
                Sign up for offers, exclusives, tips & tricks.
              </span>
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none p-2 rounded w-72 text-black opactiy-20"
              onChange={(e) => e.target.value}
            />
            <button
              type="submit"
              className="bg-black text-white p-2 w-48 outline-none rounded ml-3"
            >
              Submit
            </button>
          </div>
        </div>
        <hr className="p-3 opacity-40" style={{ color: "#ebebeb" }} />
        <section className="flex justify-between ">
          <div>
            <h3 className="font-semibold pb-2">Support</h3>
            <ul>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  Customer Support
                </a>{" "}
              </li>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  Privact Policy
                </a>{" "}
              </li>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  Terms And Conditions
                </a>{" "}
              </li>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  Cookie Policy
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold pb-2">About Us</h3>
            <ul>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  About Us
                </a>{" "}
              </li>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  How It Works
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold pb-2">My Account</h3>
            <ul>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  Log In
                </a>{" "}
              </li>
              <li className="text-xs mb-2">
                <a href="/" className="hover:underline">
                  My Account
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold pb-2">Follow Us On</h3>
            <div className="flex flex-row justify-between ">
              <button type="button">
                <FaFacebook size={20} className="hover:animate-bounce" />
              </button>
              <button type="button">
                <FaInstagram size={20} />
              </button>
              <button type="button">
                <FaSkype size={20} />
              </button>
              <button type="button">
                <AiFillTwitterCircle size={20} />
              </button>
            </div>
          </div>

          <div></div>
        </section>
      </div>
      <div
        className="flex justify-center items-center w-full h-14 my-4"
        style={{ backgroundColor: "#bd2869" }}
      >
        <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

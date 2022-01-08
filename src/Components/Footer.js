import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import styled from "styled-components";
import { TermsAndCondition } from "../Pages";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-white " style={{ backgroundColor: "#d53078" }}>
      <div className="p-14 items-center">
        <div className=" flex items-center justify-between pb-5">
          {/* <div className="flex flex-row items-center"> */}
          <img src={logo} alt="logo" className=" w-auto h-20 " />
          <div className=" tracking-widest relative block">
            <button className="text-lg mb-2" type="button">
              Sign up
              <Underline className="w-16" />
            </button>
            <span className="text-lg "> to our Newsletter</span>
            <p className="text-base tracking-wide  ">
              Sign up for offers, exclusives, tips & tricks.
            </p>
          </div>
          {/* </div> */}
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
            <h3 className="font-semibold text-lg pb-2">Support</h3>
            <ul>
              <li className="text-base mb-2">
                <Link to="/contactus" className="hover:underline">
                  Customer Support
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/privacypolicy" className="hover:underline">
                  Privacy Policy
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                  <Link to="terms&condition" className="hover:underline">
                    Terms And Conditions
                  </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/" className="hover:underline">
                  Cookie Policy
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg pb-2">About Us</h3>
            <ul>
              <li className="text-base mb-2">
                <Link to="/aboutus" className="hover:underline">
                  About Us
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/" className="hover:underline">
                  How It Works
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg  pb-2">My Account</h3>
            <ul>
              <li className="text-base mb-2">
                <Link to="/login" className="hover:underline">
                  Log In
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/myaccount" className="hover:underline">
                  My Account
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg pb-2">Follow Us On</h3>
            <div className="flex flex-row justify-between">
              <button type="button">
                <FaFacebook size={25} className="hover:animate-bounce" />
              </button>
              <button type="button">
                <FaInstagram size={25} className="hover:animate-bounce" />
              </button>
              <button type="button">
                <FaSkype size={25} className="hover:animate-bounce" />
              </button>
              <button type="button">
                <AiFillTwitterCircle
                  size={25}
                  className="hover:animate-bounce"
                />
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

const Underline = styled.hr`
  ::after {
    content: "";
    height: 4px;
    background: #d53078;
    position: absolute;
    left: calc(40% - 10%);
    bottom: 0;
  }
`;

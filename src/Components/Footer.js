import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ scroll: 0, behaviour: "smooth" });
  return (
    <div className="text-white " style={{ backgroundColor: "#d53078" }}>
      <div className="p-14">
        <div className=" flex flex-col justify-center lg:flex-row text-center items-center lg:justify-between pb-5">
          <Link to="/">
            <img src={logo} alt="logo" className=" w-auto lg:h-20 h-36  mb-2" />
          </Link>
          <div className=" tracking-widest relative my-3">
            <button className="text-lg mb-2" type="button">
              Sign up
              <Underline className="w-16" />
            </button>
            <span className="text-lg "> to our Newsletter</span>
            <p className="text-base tracking-wide  ">
              Sign up for offers, exclusives, tips & tricks.
            </p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none p-2 rounded w-72 text-black opactiy-20"
                onChange={(e) => e.target.value}
              />
              <button
                type="submit"
                className="mt-2 bg-black text-white p-2 sm:w-48 w-7/12 outline-none rounded ml-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr className="p-3 opacity-40" style={{ color: "#ebebeb" }} />

        {/* --------------------second div---------------------- */}
        <section
          className="grid grid-cols-1 text-center sm:text-left
         sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
        >
          {/* ---------------------suport------------------------ */}
          <div className="lg:text-left md:text-left mb-3">
            <h3 className="font-bold  text-xl pb-2">Support</h3>
            <ul>
              <li className="text-base mb-2">
                <Link
                  to="/contactus"
                  className="hover:underline"
                  onClick={() => scrollToTop()}
                >
                  Customer Support
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link
                  onClick={scrollToTop}
                  to="/privacypolicy"
                  className="hover:underline "
                >
                  Privacy Policy
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link
                  to="/terms&conditions"
                  onClick={scrollToTop}
                  className="hover:underline"
                >
                  Terms & Conditions
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/" onClick={scrollToTop} className="hover:underline">
                  Cookie Policy
                </Link>{" "}
              </li>
            </ul>
          </div>

          {/* --------------------about us--------------------- */}
          <div className="lg:text-left md:text-left mb-3">
            <h3 className="font-bold text-xl pb-2">About Us</h3>
            <ul>
              <li className="text-base mb-2">
                <Link
                  to="/aboutus"
                  className="hover:underline "
                  onClick={scrollToTop}
                >
                  About Us
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link to="/" className="hover:underline" onClick={scrollToTop}>
                  How It Works
                </Link>{" "}
              </li>
            </ul>
          </div>

          {/* -----------myaccount---------------- */}
          <div className=" lg:text-left md:text-left mb-3">
            <h3 className="font-bold  text-xl  pb-2">My Account</h3>
            <ul>
              <li className="text-base mb-2">
                <Link
                  to="/login"
                  className="hover:underline"
                  onClick={scrollToTop}
                >
                  Log In
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link
                  to="/myaccount"
                  className="hover:underline "
                  onClick={scrollToTop}
                >
                  My Account
                </Link>{" "}
              </li>
              <li className="text-base mb-2">
                <Link
                  to="/faq"
                  className="hover:underline "
                  onClick={scrollToTop}
                >
                  FAQ
                </Link>{" "}
              </li>
            </ul>
          </div>

          {/* --------------------follow us=----------------------   */}
          <div className="lg:text-left md:text-left mb-3">
            <h3 className="font-bold text-xl pb-2">Follow Us On</h3>
            <div className="justify-center flex flex-row items-center lg:justify-start md:justify-start sm:justify-start">
              <button type="button">
                <FaFacebook size={25} className="hover:animate-bounce " />
              </button>
              <button type="button">
                <FaInstagram size={25} className="hover:animate-bounce ml-2" />
              </button>
              <button type="button">
                <FaSkype size={25} className="hover:animate-bounce ml-2" />
              </button>
              <button type="button">
                <AiFillTwitterCircle
                  size={25}
                  className="hover:animate-bounce ml-2"
                />
              </button>
            </div>
          </div>
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

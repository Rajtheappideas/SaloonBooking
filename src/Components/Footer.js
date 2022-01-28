import React from "react";
import logo from "../assets/1.png";
import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="text-white " style={{ backgroundColor: "#d53078" }}>
      <div className="p-14">
        <div className=" flex flex-col justify-center lg:flex-row text-center items-center lg:justify-between pb-5">
          <Link to="/">
            <img src={logo} alt="logo" className=" w-auto lg:h-20 h-36  mb-2" />
          </Link>
          <div className=" tracking-widest relative my-3">
            <button className="text-lg mb-2" type="button">
              <Link to="/signup">Sign up</Link>
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
                type="button"
                className="mt-2 bg-black uppercase text-white p-2 sm:w-48 w-7/12 outline-none rounded ml-3"
              >
                subscribe
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
                  onClick={scrollToTop}
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
                <a href="/#howitworks" className="hover:underline">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* -----------myaccount---------------- */}
          <div className=" lg:text-left md:text-left mb-3">
            <h3 className="font-bold  text-xl  pb-2">My Account</h3>
            <ul>
              <li className="text-base mb-2">
                <Link
                  to="/signin"
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
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook size={25} className="hover:animate-bounce " />
                </a>
              </button>
              <button type="button">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    size={25}
                    className="hover:animate-bounce ml-2"
                  />
                </a>
              </button>
              <button type="button">
                <a
                  href="https://www.skype.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSkype size={25} className="hover:animate-bounce ml-2" />
                </a>
              </button>
              <button type="button">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle
                    size={25}
                    className="hover:animate-bounce ml-2"
                  />
                </a>
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

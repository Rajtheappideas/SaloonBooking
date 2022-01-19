import React, { useEffect } from "react";
import { AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import useUserdata from "../hooks/useUserdata";
import GoogleLogin from "react-google-login";
import { useUserContext } from "../context/user_context";
const Menu = ({ open, close, children }) => {
  const { handleFailure, handleSuccess, handleLogout, loginData } =
    useUserdata();
  const { userData } = useUserContext();

  if (!open) return null;

  return (
    <>
      <div className="fixed z-10 right-0 top-14 bottom-11 bg-white overflow-y-auto h-5/6 w-full">
        <div className="relative">
          <button onClick={close} className="absolute top-5 right-4">
            <AiOutlineClose size={30} color="black" />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 px-10 pt-5">
          <div className="flex flex-col sm:justify-start sm:items-start justify-center  items-center sm:border-r-2 sm:border-gray-300 ">
            <div>
              <LazyLoad>
                <Link to="/">
                  <img src={logo} alt="logo" className=" h-28 mb-3 block" />
                </Link>
              </LazyLoad>{" "}
            </div>

            {/* ---------------------alll links ------------------------------------ */}
            <div className="text-left text-base font-semibold ">
              <ul>
                <li className="mb-2">
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link to="/" className="hover:underline">
                    How It Works
                  </Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link to="/contactus" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link to="/terms&conditions" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-5">
                  {" "}
                  <Link to="/privacypolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* ------------------------icons social------------------------------------- */}
            <div className="lg:text-left md:text-left mb-3 sm:border-b-0 w-2/3 border-b-2 border-gray-300 ">
              <div className="justify-center flex flex-row items-center sm:justify-start">
                <button type="button">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      size={25}
                      className="mb-3 hover:animate-bounce bg-blue-900 rounded-full w-10 h-10 p-2 "
                      color="white"
                    />
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
                      className="mb-3 hover:animate-bounce ml-2 bg-pink-700 rounded-full w-10 h-10 p-2"
                      color="white"
                    />
                  </a>
                </button>
                <button type="button">
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter
                      size={25}
                      className="mb-3 hover:animate-bounce ml-2 bg-blue-500 rounded-full w-10 h-10 p-2 "
                      color="white"
                    />
                  </a>
                </button>
                <button type="button">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin
                      size={25}
                      className="mb-3 hover:animate-bounce ml-2 bg-blue-700 rounded-full w-10 h-10 p-2"
                      color="white"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* -----------beside div-------------------- */}
          {userData ? (
            <div className="text-center flex items-center justify-centers text-4xl font-semibold">
              <h1>You Already Logged in!</h1>
            </div>
          ) : (
            <div className="flex flex-col justify-center text-right items-center pt-10">
              <div className="mb-3">
                <p className="text-center uppercase text-base font-semibold tracking-widest">
                  account sign in
                </p>
              </div>
              <div className="relative text-center ">
                {loginData ? (
                  <button
                    onClick={handleLogout}
                    className="w-72 p-2 bg-black text-white mb-2"
                  >
                    logout
                  </button>
                ) : (
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                    className="w-72 mb-3 "
                  ></GoogleLogin>
                )}
                <button className="p-2 items-center justify-start text-white outline-none flex flex-row w-72 bg-blue-800">
                  <AiFillFacebook size={25} color="white" className="mx-2" />
                  Sign in with Google
                </button>
                <UnderlineLeft />
                <p className="text-center">or</p>
                <UnderlineRight />
              </div>
              <div className="my-2">
                <form>
                  <div className="relative mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto"
                    />
                    <MdEmail
                      size={25}
                      className="absolute top-2 left-0 p-1 ml-2"
                      color="gray"
                    />
                  </div>
                  <div className="relative">
                    <MdLock
                      size={25}
                      className="absolute top-2 left-0 p-1 ml-2"
                      color="gray"
                    />
                    <input
                      type="password"
                      placeholder="password"
                      className="opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72 w-auto"
                    />
                  </div>
                </form>
                <button className="text-right hover:underline my-2">
                  <Link to="/resetpassword">Forgot Password ?</Link>
                </button>
              </div>
              <div className="sm:w-72 w-60">
                <p className="text-center">
                  By logging in you agree to our{" "}
                  <span className="underline font-semibold">
                    <Link to="/">Conditions of Use</Link>
                  </span>{" "}
                  and{" "}
                  <span className="underline font-semibold">
                    <Link to="privacypolicy">Privacy Policy</Link>
                  </span>
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="p-2 bg-black text-white sm:w-72 w-60 ">
                  Login
                </button>
                <p className="uppercase mt-3">
                  don't have an account ?{" "}
                  <span className="underline">
                    <Link to="/signup">sign up</Link>
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
const UnderlineLeft = styled.p`
  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0%;
    background: gray;
    width: 45%;
    height: 1px;
  }
`;
const UnderlineRight = styled.p`
  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 0%;
    background: gray;
    width: 45%;
    height: 1px;
  }
`;

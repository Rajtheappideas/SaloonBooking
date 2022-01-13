import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import login from "../assets/login.jpg";
import logo from "../assets/logo.png";

const Signin = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex sm:justify-between items-center  w-auto sm:h-screen rounded-md sm:pt-10">
          {/* <Link to="/">
            <img src={logo} alt="logo" className="sm:block hidden sm:show h-28 mb-3" />
          </Link> */}
          <div>
            <img
              src={login}
              alt="login logo"
              className="sm:block hidden h-full w-full mx-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start sm:my-10">
          <Link to="/">
            <img src={logo} alt="logo" className="block h-28 mb-2" />
          </Link>
          <div className="flex flex-col justify-center text-right items-center pt-10">
            {/* <div className="mb-3 relative">
              <button className="text-left px-5">Login</button>
              <button className="text-right px-5">Create a Account</button>
              <Underline className="mt-2" />
            </div> */}
            <div className="relative">
              <button className="p-2 items-center outline-none justify-center flex flex-row border w-72 mb-3">
                <img
                  src="https://img.icons8.com/color/50/000000/google-logo.png"
                  alt="google icon"
                  className="mx-2 h-6"
                />
                Sign in with Google
              </button>
              <button className="p-2 items-center justify-center text-white outline-none flex flex-row w-72 bg-blue-800">
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
                <span className="underline font-bold">
                  <Link to="/signup">sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

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

const Underline = styled.p`
  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0%;
    width: 100%;
    height: 2px;
    background: gray;
  }
`;

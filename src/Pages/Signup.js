import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiOutlineReload } from "react-icons/ai";
import { MdEmail, MdLock, MdPhone } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import signup from "../assets/signup.jpg";
import logo from "../assets/logo.png";

const Signup = () => {
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [enteredCaptcha, setEnterCaptcha] = useState("");

  const characters = "abcdefghijklmnopqrstvwxyz1234567890";

  // ==========================generate a captcha---------------------------------
  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setGeneratedCaptcha(result);
    return result;
  }

  //   -----------------------comapare captcha-------------
  const compareCapthca = (e) => {
    if (enteredCaptcha === generatedCaptcha) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  };

  useEffect(() => {
    window.onload = generateString(6);
  }, []);
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex sm:justify-between items-center  w-auto sm:h-screen rounded-md sm:pt-10">
          {/* <Link to="/">
            <img src={logo} alt="logo" className="sm:block hidden sm:show h-28 mb-3" />
          </Link> */}
          <div>
            <img
              src={signup}
              alt="login logo"
              className="sm:block hidden h-full w-full mx-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start sm:my-3">
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
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="User Name"
                    className="opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto"
                  />
                  <FaUserAlt
                    size={25}
                    className="absolute top-2 left-0 p-1 ml-2"
                    color="gray"
                  />
                </div>
                <div className="relative mb-3">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto"
                  />
                  <MdPhone
                    size={25}
                    className="absolute top-2 left-0 p-1 ml-2"
                    color="gray"
                  />
                </div>
                <div className="relative mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto"
                  />
                  <MdLock
                    size={25}
                    className="absolute top-2 left-0 p-1 ml-2"
                    color="gray"
                  />
                </div>
                <div className="relative mb-3">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="opacity-70 bg-gray-300 outline-none py-2 pl-10 rounded-md md:w-72  w-auto"
                  />
                  <MdLock
                    size={25}
                    className="absolute top-2 left-0 p-1 ml-2"
                    color="gray"
                  />
                </div>

                <div className="relative mb-3 flex flex-col justify-center sm:items-start items-center">
                  <div>
                    <input
                      type="text"
                      value={generatedCaptcha}
                      disabled={true}
                      onChange={(e) => setGeneratedCaptcha(e.target.value)}
                      className="opacity-70 bg-gray-300 mr-2 text-center  text-green-800 mb-3 tracking-wider font-bold outline-none py-2  rounded-md sm:w-32  w-20"
                    />
                    <button type="button" onClick={() => generateString(6)}>
                      <AiOutlineReload size={30} />
                    </button>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter captcha"
                      onChange={(e) => setEnterCaptcha(e.target.value)}
                      className="opacity-70 bg-gray-300 font-bold outline-none py-2 pl-5 rounded-md md:w-72  w-auto"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="sm:w-72 w-60">
              <p className="text-center">
                By creating and account you agree to our{" "}
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
              <button
                type="submit"
                onClick={() => compareCapthca()}
                className="p-2 bg-black text-white sm:w-72 w-60 "
              >
                Sign Up
              </button>
              <p className="uppercase mt-3">
                Already have an account ?
                <span className="underline font-bold">
                  <Link to="/signin">sign in</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

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

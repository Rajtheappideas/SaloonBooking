import React, { Fragment, useState } from "react";
import { Footer, Navbar } from "../Components";
import logo from "../assets/contactus.jpg";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { MdEmail, MdMessage, MdPhone } from "react-icons/md";
import LazyLoad from "react-lazyload";
const ContactUs = () => {
  const [isVerified, setIsverified] = useState(false);

  const handleChange = (value) => {
    console.log("recaptcha", value);
    setIsverified(true);
  };
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className="relative">
          <LazyLoad once>
            <img
              src={logo}
              alt="terms&confitionpic"
              className="w-full bg-auto  lg:h-80 md:h-60 sm:h-40  object-cover object-center  "
            />
          </LazyLoad>
          <p className="uppercase text-white sm:text-4xl text-3xl font-extrabold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  ">
            <span>contact us</span>
          </p>
        </div>
        <div className="p-20">
          <div className="text-center mb-8 ">
            <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
              lets's get connnect
              <Underline className="mt-4 " />
            </div>
            <p className="block my-4">
              {" "}
              Join us online and start building your business today.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="shadow-2xl rounded-lg w-auto h-auto">
              <div className="p-10 flex flex-col items-center justify-center ">
                <form>
                  <div className="relative my-3">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                    />
                    <FaUserAlt
                      size={25}
                      className="absolute text-gray-300
                     top-2 left-0 p-1 ml-2"
                    />
                  </div>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Email*"
                      className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                    />
                    <MdEmail
                      size={25}
                      className="absolute text-gray-300
                     top-2 left-0 p-1 ml-2"
                    />
                  </div>
                  <div className="relative mb-3">
                    <input
                      type="number"
                      placeholder="Phone*"
                      className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                    />
                    <MdPhone
                      size={25}
                      className="absolute text-gray-300
                     top-2 left-0 p-1 ml-2"
                    />
                  </div>
                  <div className="relative mb-3">
                    <textarea
                      type="text"
                      placeholder="Enter your message*"
                      cols="auto"
                      rows="5"
                      className="opacity-50 bg-gray-300 outline-none py-2 pl-10 rounded-lg lg:w-96 md:w-72 w-auto"
                    />
                    <MdMessage
                      size={25}
                      className="absolute text-gray-300
                     top-2 left-0 p-1 ml-2"
                    />
                  </div>
                  <div className="mb-3">
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                      onChange={handleChange}
                    />
                    <button
                      // disabled={!isVerified}
                      type="button"
                      className="bg-black mt-3 rounded-md text-white uppercase font-semibold text-base p-2 w-full"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;

const Underline = styled.p`
  ::after {
    content: "";
    height: 4px;
    width: 20%;
    background: #d53078;
    position: absolute;
    left: calc(45% - 10%);
    bottom: 0;
  }
`;

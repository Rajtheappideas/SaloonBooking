import React, { useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../Components";
import barberShop from "../assets/barber_shop.jpg";
import barberimg1 from "../assets/barberstylist1.jpg";
import barberimg2 from "../assets/barberstylist2.jpg";
import barberimg3 from "../assets/barberstylist3.jpg";
import {
  MdEmail,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
  MdVerifiedUser,
} from "react-icons/md";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaMobileAlt,
  FaPaypal,
  FaRegCreditCard,
  FaSearch,
  FaShareSquare,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Map from "../assets/map.png";
import { BsCashStack, BsFilterLeft, BsThreeDots } from "react-icons/bs";
import AboutusBarbershop from "../Components/AboutusBarbershop";
import { AiOutlineLeft, AiOutlineRight, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const popularOffer = [
  //
  [
    {
      name: "Skin fade",
      prize: "10.00",
    },
    {
      name: "Shape up",
      prize: "4.00",
    },
    {
      name: "Hair cut & beard shave",
      prize: "10.00",
    },
    {
      name: "Beard & moustache",
      prize: "10.00",
    },
    {
      name: "Haircut",
      prize: "10.00",
    },
  ],
];
const offers = [
  { name: "popular" },
  { name: "Mens Waxing - Face & Body " },
  { name: "Womans Waxing - Face & Body " },
  { name: "Advance Body Treatment" },
];
const BarberShop = () => {
  const [favourtie, setFavourite] = useState(false);
  const [openOffer, setOpenoffer] = useState(false);

  return (
    <>
      <MetaTags>
        <title>Barber shop</title>
      </MetaTags>
      <Navbar />
      <div className="flex flex-row w-full px-10 py-4">
        {/* -------------------------------------------barber shop details--------------------------------      */}
        <div className="w-full flex flex-col mr-4">
          <img
            src={barberShop}
            alt="barbershopimg"
            className="h-96 w-full rounded-lg object-cover object-cente shadow-lg"
          />
          <div className="flex flex-row justify-between items-center mt-3 mb-2">
            <p className="font-bold text-lg">J R Razor Shop</p>
            <p className="inline-flex text-green-600 font-thin">
              <MdVerifiedUser
                className="inline-blockblock mx-1"
                color="green"
                size={20}
              />
              Verified
              <button onClick={() => setFavourite((prev) => !prev)}>
                {favourtie ? (
                  <FiHeart size={25} className="ml-3" color="black" />
                ) : (
                  <FaHeart size={25} color="red" className="ml-3" />
                )}
              </button>
            </p>
          </div>
          <p className="text-gray-500 mb-3 font-semibold">10 miles away</p>
          <div className="flex justify-start items-center mb-5">
            <span className="bg-pink-200 px-5 py-2 rounded-3xl">Male</span>
            <span className="bg-pink-200 px-5 py-2 rounded-3xl mx-2">Fade</span>
            <span className="bg-pink-200 px-5 py-2 rounded-3xl">Cut</span>
            <span className="bg-pink-200 px-5 py-2 rounded-3xl mx-2">Trim</span>
            <span className="bg-pink-200 px-5 py-2 rounded-3xl">Kids</span>
            <span className="bg-pink-200 px-5 py-2 rounded-3xl ml-2">
              Students
            </span>
          </div>
          <div className="flex justify-around items-center border-b border-gray-300 w-full">
            <button className="text-gray-400 text-lg font-semibold">
              About Us
            </button>
            <button className="text-gray-400 mx-3 text-lg font-semibold">
              <a href="#stylist">Stylist</a>
            </button>
            <button className="text-gray-400 text-lg font-semibold">
              <a href="#whatweoffer">We are offer</a>
            </button>
            <button className="text-gray-400 mx-3 text-lg font-semibold">
              <a href="#recentwork">Recent Works</a>
            </button>
            <button className="text-gray-400 text-lg font-semibold">
              <a href="#review">Reviews</a>
            </button>
          </div>

          <AboutusBarbershop />
        </div>
        {/* ---------------------------map and booking------------------------------------ */}
        <div className="w-1/2 flex flex-col">
          <img
            src={Map}
            alt="mappic"
            className="w-full mb-4 object-cover object-center h-60 rounded-lg shadow-lg"
          />
          <p>8 Avenue parade, N21 2AX, London</p>
          <button className="w-full my-3 bg-black text-white p-3 text-center rounded-lg">
            book now
          </button>
          {/* -------------------------social links------------------------------- */}
          <div className="mb-7 mt-4">
            <p className="uppercase border-b-2 font-semibold border-gray-200 mb-3 pb-3">
              our social media
            </p>
            <div className="flex flex-row items-center justify-around px-4">
              <button type="button">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook
                    size={25}
                    className="mx-auto bg-blue-900 rounded-full w-10 h-10 p-2 "
                    color="white"
                  />
                </a>
                Facebook
              </button>
              <button type="button" className="mx-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    size={25}
                    className="mx-auto bg-pink-700 rounded-full w-10 h-10 p-2"
                    color="white"
                  />
                </a>
                Instagram
              </button>
              <button type="button">
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/color/42/000000/domain--v1.png"
                    alt="webstie logo"
                    className="mx-auto"
                  />
                </a>
                Website
              </button>
              <button type="button" className="ml-4">
                <a href="/" target="_blank" rel="noreferrer">
                  <FaShareSquare
                    size={25}
                    className="mx-auto bg-gray-700 rounded-full w-10 h-10 p-2"
                    color="white"
                  />
                </a>
                Share
              </button>
            </div>
          </div>

          {/* ----------------------------------------our details------------------------------ */}
          <div className="border-b-2 border-gray-300 pb-3">
            <p className="border-b-2 border-gray-200  pb-3 uppercase text-base font-semibold">
              Our details
            </p>
            <div>
              <p className="my-2">Payment methods</p>
              <div className="flex items-center justify-around">
                <p className="text-center">
                  <BsCashStack
                    size={35}
                    color="white"
                    className="bg-pink-600 rounded-full p-2 h-12 w-12"
                  />
                  <span>Cash</span>
                </p>
                <p className="text-center">
                  <FaPaypal
                    size={35}
                    color="white"
                    className="bg-pink-600 rounded-full p-2 h-12 w-12"
                  />
                  <span>Paypal</span>
                </p>
                <p className="text-center">
                  <FaRegCreditCard
                    size={25}
                    className="bg-pink-600 rounded-full p-2 h-12 w-12"
                    color="white"
                  />

                  <span>Card</span>
                </p>
                <p className="text-center">
                  <BsThreeDots
                    size={35}
                    className="bg-pink-600 rounded-full p-2 h-12 w-12"
                    color="white"
                  />
                  <span>Other</span>
                </p>
              </div>
            </div>
          </div>

          {/* -----------------------------call---------------------------- */}
          <div className="justify-between flex my-3">
            <p className="inline-flex">
              <FaMobileAlt
                size={35}
                color="gray"
                className="inline-block mr-2"
              />
              <span className="my-auto">012 2314 123</span>
            </p>
            <button className="border border-gray-300 rounded-lg w-20 px-2 py-1 text-center">
              CALL
            </button>
          </div>
          <div className="justify-between items-center flex my-3 border-b-2 border-gray-300 pb-3">
            <p className="inline-flex">
              <MdEmail size={35} color="gray" className="inline-block mr-2" />
              <span className="my-auto">loremispum@mail.com</span>
            </p>
            <button className="border rounded-lg border-gray-300 w-20 px-2 py-1 text-center">
              EMAIL
            </button>
          </div>

          {/* ----------------------------------open days-------------------------------- */}
          <div className="flex flex-col my-3 border-b border-gray-300 pb-3">
            <div className="flex justify-between mb-2">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
            <div className="flex justify-between mb-2 ">
              <span>Monday</span>
              <span>09:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tuesday</span>
              <span>09:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Wednesday</span>
              <span>09:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Thursday</span>
              <span>09:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Friday</span>
              <span>09:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Saturday</span>
              <span>09:00 AM - 7:00 PM</span>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-500">Parking & Directions</p>
            <p>Nearby streert parking outside of the shop.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BarberShop;

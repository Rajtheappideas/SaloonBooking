import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight, AiTwotoneStar } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import barberimg1 from "../assets/barberstylist1.jpg";
import barberimg2 from "../assets/barberstylist2.jpg";
import barberimg3 from "../assets/barberstylist3.jpg";
import { BsFilterLeft } from "react-icons/bs";
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

const AboutusBarbershop = () => {
  const [openOffer, setOpenoffer] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col my-4">
        <span className="font-semibold mb-3 text-xl text-pink-500 tracking-wide">
          About Us
        </span>
        <p className="flex items-center ">
          <span className="mr-2 text-xl">5.0</span>
          <AiTwotoneStar size={25} color="gold" />
          <AiTwotoneStar size={25} color="gold" />
          <AiTwotoneStar size={25} color="gold" />
          <AiTwotoneStar size={25} color="gold" />
          <AiTwotoneStar size={25} color="gold" />
          <span className="ml-3 text-gray-500">129 REVIEWS</span>
          <MdOutlineKeyboardArrowRight size={25} className="cursor-pointer" />
        </p>
        <p>
          Lorem fugiat amet culpa minim laborum consectetur ad velit irure do
          nulla aute consequat occaecat. Labore magna in ullamco nisi
          reprehenderit adipisicing sint sit ipsum. Voluptate enim sint aliquip
          culpa ea cupidatat aute mollit in sunt. Eiusmod eu velit in magna eu.
        </p>

        {/* --------------------------stylist------------------------------- */}
        <div className="my-3" id="stylist">
          <span className="text-lg block tracking-wide font-semibold text-pink-500">
            Stylist
          </span>
          <div className=" flex overflow-x-hidden">
            <div className="text-center">
              <img
                src={barberimg1}
                alt="barberimage"
                className="w-40 h-40 object-cover object-center rounded-lg"
              />
              <span>Harry Corlis</span>
            </div>
            <div className="text-center mx-10">
              <img
                src={barberimg2}
                alt="barberimage"
                className="w-40 h-40 object-cover object-center rounded-lg"
              />
              <span>Alex</span>
            </div>
            <div className="text-center mr-10">
              <img
                src={barberimg3}
                alt="barberimage"
                className="w-40 h-40 object-cover object-center rounded-lg"
              />
              <span>Stell</span>
            </div>
            <div className="text-center">
              <img
                src={barberimg1}
                alt="barberimage"
                className="w-40 h-40 object-cover object-center rounded-lg"
              />
              <span>Stell</span>
            </div>
          </div>
        </div>

        {/* ----------------------------------what we offer----------------------------------- */}
        <div className="justify-between flex items-center my-3 pb-3 border-b border-gray-300 " id="whatweoffer">
          <p className="text-pink-500 font-semibold text-xl">What We offer</p>
          <div className="relative ">
            <input
              type="text"
              className="bg-gray-300 w-auto p-3 pl-10 rounded-lg outline-none"
              placeholder="Search service for"
            />
            <FaSearch
              size={25}
              color="gray"
              className="absolute top-3 left-3"
            />
          </div>
        </div>
        {offers.map((item) => {
          return (
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-bold text-lg">{item.name}</span>
              {openOffer ? (
                <MdOutlineKeyboardArrowUp
                  onClick={() => setOpenoffer((prev) => !prev)}
                  size={35}
                  className="cursor-pointer"
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  onClick={() => setOpenoffer((prev) => !prev)}
                  size={35}
                  className="cursor-pointer"
                />
              )}
            </div>
          );
        })}
        {openOffer ? (
          <>
            {popularOffer.map((item) => (
              <div className="flex justify-between items-center my-2">
                <span>{item.name}</span>
                <p>
                  <span>$ {item.prize}</span>
                  <button className="bg-black text-white ml-2 w-40 px-4 py-2 rounded-lg text-center">
                    BOOK
                  </button>
                </p>
              </div>
            ))}
          </>
        ) : null}

        {/* --------------------------------recent work------------------------------------ */}
        <div className="my-3" id="recentwork">
          <span className="text-lg block tracking-wide font-semibold text-pink-500">
            Recent Work
          </span>
          <div className="flex mt-2 overflow-x-hidden">
            <img
              src={barberimg1}
              alt="barberimage"
              className="w-40 h-40 object-cover object-center rounded-lg"
            />
            <img
              src={barberimg2}
              alt="barberimage"
              className="w-40 h-40 mx-5 object-cover object-center rounded-lg"
            />
            <img
              src={barberimg3}
              alt="barberimage"
              className="w-40 h-40 mr-5 object-cover  object-center rounded-lg"
            />
            <img
              src={barberimg1}
              alt="barberimage"
              className="w-40 h-40 object-cover  object-center rounded-lg"
            />
          </div>
        </div>

        {/* ----------------------------------------reviews-------------------------------------------- */}
        <div className="my-3" id="review">
          <div className="flex justify-between items-center">
            <span className="text-lg block tracking-wide font-semibold text-pink-500">
              Reviews
            </span>
            <button className="bg-black text-white p-3 w-40 rounded-lg text-center">
              <Link to="/review">Write a review</Link>
            </button>
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="flex">
              <span className="text-4xl font-bold">5.0</span>
              <div className="flex flex-col mx-2">
                <p className="flex">
                  <AiTwotoneStar size={20} color="gold" />
                  <AiTwotoneStar size={20} color="gold" />
                  <AiTwotoneStar size={20} color="gold" />
                  <AiTwotoneStar size={20} color="gold" />
                  <AiTwotoneStar size={20} color="gold" />
                </p>
                <span className="font-semibold text-gray-500">129 Ratings</span>
              </div>
            </div>
            <button className="border p-2 flex font-semibold items-center w-auto">
              <BsFilterLeft size={25} color="gray" />
              <span className="text-gray-400 mx-1">Sort by :</span>
              Most recent <MdOutlineKeyboardArrowDown size={30} color="gray" />
            </button>
          </div>
          {/* --------------------------------all reviews------------------------------------------ */}
          <div className="my-4 border-b border-gray-300 pb-4 w-full">
            <div className="flex items-center">
              <span className="bg-gray-200 text-lg rounded-full px-5 py-3 font-semibold">
                J
              </span>
              <div className="mx-2">
                <span className="block font-semibold">jimesh Rule</span>
                <span className="block text-gray-400">11 hour ago</span>
              </div>
            </div>
            <div className="flex my-3">
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
            </div>
            <p>
              LoremEx aliqua irure laborum irure officia minim id occaecat ad
              minim velit magna sit. Sit amet officia deserunt reprehenderit
              esse ea occaecat voluptate irure eu irure ad sit deserunt. Do do
              esse tempor consequat anim aute dolor proident nulla incididunt id
              esse. Ex ea cillum enim aliqua qui laborum occaecat laboris.
            </p>
          </div>
          <div className="my-4 border-b border-gray-300 pb-4 w-full">
            <div className="flex items-center">
              <span className="bg-gray-200 text-lg rounded-full px-5 py-3 font-semibold">
                J
              </span>
              <div className="mx-2">
                <span className="block font-semibold">jimesh Rule</span>
                <span className="block text-gray-400">11 hour ago</span>
              </div>
            </div>
            <div className="flex my-3">
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
            </div>
            <p>
              LoremEx aliqua irure laborum irure officia minim id occaecat ad
              minim velit magna sit. Sit amet officia deserunt reprehenderit
              esse ea occaecat voluptate irure eu irure ad sit deserunt. Do do
              esse tempor consequat anim aute dolor proident nulla incididunt id
              esse. Ex ea cillum enim aliqua qui laborum occaecat laboris.
            </p>
          </div>
          <div className="my-4 border-b border-gray-300 pb-4 w-full">
            <div className="flex items-center">
              <span className="bg-gray-200 text-lg rounded-full px-5 py-3 font-semibold">
                J
              </span>
              <div className="mx-2">
                <span className="block font-semibold">jimesh Rule</span>
                <span className="block text-gray-400">11 hour ago</span>
              </div>
            </div>
            <div className="flex my-3">
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
            </div>
            <p>
              LoremEx aliqua irure laborum irure officia minim id occaecat ad
              minim velit magna sit. Sit amet officia deserunt reprehenderit
              esse ea occaecat voluptate irure eu irure ad sit deserunt. Do do
              esse tempor consequat anim aute dolor proident nulla incididunt id
              esse. Ex ea cillum enim aliqua qui laborum occaecat laboris.
            </p>
          </div>
          <div className="my-4 border-b border-gray-300 pb-4 w-full">
            <div className="flex items-center">
              <span className="bg-gray-200 text-lg rounded-full px-5 py-3 font-semibold">
                J
              </span>
              <div className="mx-2">
                <span className="block font-semibold">jimesh Rule</span>
                <span className="block text-gray-400">11 hour ago</span>
              </div>
            </div>
            <div className="flex my-3">
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
              <AiTwotoneStar size={25} color="gold" />
            </div>
            <p>
              LoremEx aliqua irure laborum irure officia minim id occaecat ad
              minim velit magna sit. Sit amet officia deserunt reprehenderit
              esse ea occaecat voluptate irure eu irure ad sit deserunt. Do do
              esse tempor consequat anim aute dolor proident nulla incididunt id
              esse. Ex ea cillum enim aliqua qui laborum occaecat laboris.
            </p>
          </div>

          {/* -------------------------------------pagination----------------------------------------- */}
          <div className="flex flex-row justify-center items-center my-6">
            <button type="button">
              <AiOutlineLeft size={20} color="black" />
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-black hover:text-white px-3 py-1 rounded-md ml-5 mr-1"
            >
              1
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-black hover:text-white px-3 py-1 rounded-md mx-1"
            >
              2
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-black hover:text-white px-3 py-1 rounded-md mx-1"
            >
              3
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-black hover:text-white px-3 py-1 rounded-md mx-1"
            >
              4
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-black hover:text-white px-3 py-1 rounded-md mr-5 ml-1"
            >
              5
            </button>
            <button type="button">
              <AiOutlineRight size={20} color="black" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusBarbershop;

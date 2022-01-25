import React from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSetting,
  AiTwotoneStar,
} from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdVerifiedUser } from "react-icons/md";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../Components";
import barbershop from "../assets/barber_shop.jpg";
import barbershop1 from "../assets/blush&blow.jpg";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <MetaTags>
        <title>Search</title>
      </MetaTags>
      <Navbar />
      <div className="flex flex-row justify-around items-start px-10 py-5">
        {/* ----------------------------------filters----------------------------------------- */}
        <div className="w-1/3 flex flex-col mr-4 border-r-2 border-gray-300 pr-4">
          <div className="flex sm:flex-row flex-col justify-between items-center mb-3">
            <p className="inline-flex font-semibold text-xl">
              <AiOutlineSetting
                className="inline-block mr-1"
                size={25}
                color="gray"
              />
              Filter
            </p>
            <button className="text-lg font-bold text-red-500 cursor-pointer">
              Reset
            </button>
          </div>
          <div>
            <label className="font-semibold text-base tracking-wide">
              Postcode
            </label>
            <input
              type="text"
              className="w-full block mb-3 p-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="SW11"
            />
            <label className="font-semibold text-base tracking-wide">
              Category
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Barber"
            />
            <label className="font-semibold text-base tracking-wide">
              Distance
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Within 1 mile"
            />
            <label className="font-semibold text-base tracking-wide">
              Rating
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
            />
            <label className="font-semibold text-base tracking-wide">
              Prize
            </label>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
            />
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="$9 - $100"
            />
            <label className="font-semibold text-base tracking-wide">
              Waiting Times
            </label>
            <input
              type="range"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
            />
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="0min - 91min"
            />
            <label className="font-semibold text-base tracking-wide">
              Service
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Pedicure"
            />
            <label className="font-semibold text-base tracking-wide">
              Opening Days
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Monday"
            />
            <label className="font-semibold text-base tracking-wide">
              Tags
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 h-auto bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Male Wax Hair Removal"
            />
            <label className="font-semibold text-base tracking-wide">
              Opening Time
            </label>
            <input
              type="time"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="2:30 PM"
            />
            <label className="font-semibold text-base tracking-wide">
              Accept Booking
            </label>
            <input
              type="text"
              className="w-full p-3 mb-3 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Yes"
            />
            <label className="font-semibold text-base tracking-wide">
              Status
            </label>
            <input
              type="text"
              className="w-full p-3 mb-5 bg-gray-100 outline-none border border-gray-400 rounded-lg"
              placeholder=""
              value="Verified"
            />
            <button className="w-full bg-black text-white p-3 rounded-md">
              Apply
            </button>
          </div>
        </div>

        {/* ------------------------------------------barber shop/results----------------------------------------------- */}
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-3 border-b border-gray-300 pb-3">
            <p className="inline-flex font-bold text-xl">Salons near SW11</p>
            <button className="text-lg border inline-flex border-gray-200 p-2 cursor-pointer">
              <BsFilterLeft className="inline-block" size={25} color="gray" />
              <span className="text-gray-500 mr-1">Sort by:</span>Distance
              <MdOutlineKeyboardArrowDown
                size={25}
                className="ml-2"
                color="gray"
              />
            </button>
          </div>
          {/* -----------------------------salons---------------------------------------- */}
          <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex  md:flex-row flex-col justify-start items-start rounded-md my-3">
            <img
              src={barbershop}
              alt="barber"
              className="md:w-40 lg:h-50 h-40 w-full object-cover object-center rounded-md"
            />
            <div className="md:border-r md:border-b-0 border-b  border-gray-400 md:w-1/2 w-full md:px-10 flex flex-col items-start md:my-0 mt-5">
              <h2 className="font-bold text-md mb-1">J R Razor Sharp</h2>
              <span className="text-sm text-gray-500 font-bold">
                10 miles away
              </span>
              <p className="md:tracking-widest tracking-tighter text-sm my-1">
                8 Avenue parade, N21 2AX, London
              </p>
              <p className="text-gray-500 inline-flex mb-1">
                <span className="mr-2">5 Star</span>
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
              </p>
              <div className="text-sm text-black md:mb-0 mb-5">
                <ul style={{ listStyleType: "disc" }}>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Skinician Skincare</li>
                    <li className="lg:mx-4 mx-3">Spray Tranning & Message</li>
                  </div>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Manicure & Pedicure</li>
                    <li className="lg:mx-4 mx-3">Wedding Makeup</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex-col flex justify-center items-center mx-auto md:w-1/6 sm:w-1/2 lg:my-0 my-5">
              <p className="inline-flex text-green-600 ">
                <MdVerifiedUser
                  className="inline-blockblock mx-1"
                  color="green"
                  size={20}
                />
                Verified
              </p>
              <p className="text-blue-400 mb-5">
                <button>Write a review</button>
              </p>
              <button className="border-2 text-center  bg-black text-white w-full px-3 py-2 mb-2">
                <Link to="/barbershop">View Profile</Link>
              </button>
              <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                Book
              </button>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex  md:flex-row flex-col justify-start items-start rounded-md my-3">
            <img
              src={barbershop1}
              alt="barber"
              className="md:w-40 lg:h-50 h-40 w-full object-cover object-center rounded-md"
            />
            <div className="md:border-r md:border-b-0 border-b  border-gray-400 md:w-1/2 w-full md:px-10 flex flex-col items-start md:my-0 mt-5">
              <h2 className="font-bold text-md mb-1">Headhunters Barbers</h2>
              <span className="text-sm text-gray-500 font-bold">
                10 miles away
              </span>
              <p className="md:tracking-widest tracking-tighter text-sm my-1">
                8 Avenue parade, N21 2AX, London
              </p>
              <p className="text-gray-500 inline-flex mb-1">
                <span className="mr-2">5 Star</span>
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
              </p>
              <div className="text-sm text-black md:mb-0 mb-5">
                <ul style={{ listStyleType: "disc" }}>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Skinician Skincare</li>
                    <li className="lg:mx-4 mx-3">Spray Tranning & Message</li>
                  </div>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Manicure & Pedicure</li>
                    <li className="lg:mx-4 mx-3">Wedding Makeup</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex-col flex justify-center items-center mx-auto md:w-1/6 sm:w-1/2 lg:my-0 my-5">
              <p className="inline-flex text-green-600 ">
                <MdVerifiedUser
                  className="inline-blockblock mx-1"
                  color="green"
                  size={20}
                />
                Verified
              </p>
              <p className="text-blue-400 mb-5">
                <button>Write a review</button>
              </p>
              <button className="border-2 text-center  bg-black text-white w-full px-3 py-2 mb-2">
                View Profile
              </button>
              <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                Book
              </button>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex  md:flex-row flex-col justify-start items-start rounded-md my-3">
            <img
              src={barbershop}
              alt="barber"
              className="md:w-40 lg:h-50 h-40 w-full object-cover object-center rounded-md"
            />
            <div className="md:border-r md:border-b-0 border-b  border-gray-400 md:w-1/2 w-full md:px-10 flex flex-col items-start md:my-0 mt-5">
              <h2 className="font-bold text-md mb-1">J R Razor Sharp</h2>
              <span className="text-sm text-gray-500 font-bold">
                10 miles away
              </span>
              <p className="md:tracking-widest tracking-tighter text-sm my-1">
                8 Avenue parade, N21 2AX, London
              </p>
              <p className="text-gray-500 inline-flex mb-1">
                <span className="mr-2">5 Star</span>
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
              </p>
              <div className="text-sm text-black md:mb-0 mb-5">
                <ul style={{ listStyleType: "disc" }}>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Skinician Skincare</li>
                    <li className="lg:mx-4 mx-3">Spray Tranning & Message</li>
                  </div>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Manicure & Pedicure</li>
                    <li className="lg:mx-4 mx-3">Wedding Makeup</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex-col flex justify-center items-center mx-auto md:w-1/6 sm:w-1/2 lg:my-0 my-5">
              <p className="inline-flex text-green-600 ">
                <MdVerifiedUser
                  className="inline-blockblock mx-1"
                  color="green"
                  size={20}
                />
                Verified
              </p>
              <p className="text-blue-400 mb-5">
                <button>Write a review</button>
              </p>
              <button className="border-2 text-center  bg-black text-white w-full px-3 py-2 mb-2">
                View Profile
              </button>
              <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                Book
              </button>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex  md:flex-row flex-col justify-start items-start rounded-md my-3">
            <img
              src={barbershop1}
              alt="barber"
              className="md:w-40 lg:h-50 h-40 w-full object-cover object-center rounded-md"
            />
            <div className="md:border-r md:border-b-0 border-b  border-gray-400 md:w-1/2 w-full md:px-10 flex flex-col items-start md:my-0 mt-5">
              <h2 className="font-bold text-md mb-1">Chop Shop</h2>
              <span className="text-sm text-gray-500 font-bold">
                10 miles away
              </span>
              <p className="md:tracking-widest tracking-tighter text-sm my-1">
                8 Avenue parade, N21 2AX, London
              </p>
              <p className="text-gray-500 inline-flex mb-1">
                <span className="mr-2">5 Star</span>
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
              </p>
              <div className="text-sm text-black md:mb-0 mb-5">
                <ul style={{ listStyleType: "disc" }}>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Skinician Skincare</li>
                    <li className="lg:mx-4 mx-3">Spray Tranning & Message</li>
                  </div>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Manicure & Pedicure</li>
                    <li className="lg:mx-4 mx-3">Wedding Makeup</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex-col flex justify-center items-center mx-auto md:w-1/6 sm:w-1/2 lg:my-0 my-5">
              <p className="inline-flex text-green-600 ">
                <MdVerifiedUser
                  className="inline-blockblock mx-1"
                  color="green"
                  size={20}
                />
                Verified
              </p>
              <p className="text-blue-400 mb-5">
                <button>Write a review</button>
              </p>
              <button className="border-2 text-center  bg-black text-white w-full px-3 py-2 mb-2">
                View Profile
              </button>
              <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                Book
              </button>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex  md:flex-row flex-col justify-start items-start rounded-md my-3">
            <img
              src={barbershop}
              alt="barber"
              className="md:w-40 lg:h-50 h-40 w-full object-cover object-center rounded-md"
            />
            <div className="md:border-r md:border-b-0 border-b  border-gray-400 md:w-1/2 w-full md:px-10 flex flex-col items-start md:my-0 mt-5">
              <h2 className="font-bold text-md mb-1">J R Razor Sharp</h2>
              <span className="text-sm text-gray-500 font-bold">
                10 miles away
              </span>
              <p className="md:tracking-widest tracking-tighter text-sm my-1">
                8 Avenue parade, N21 2AX, London
              </p>
              <p className="text-gray-500 inline-flex mb-1">
                <span className="mr-2">5 Star</span>
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
              </p>
              <div className="text-sm text-black md:mb-0 mb-5">
                <ul style={{ listStyleType: "disc" }}>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Skinician Skincare</li>
                    <li className="lg:mx-4 mx-3">Spray Tranning & Message</li>
                  </div>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Manicure & Pedicure</li>
                    <li className="lg:mx-4 mx-3">Wedding Makeup</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex-col flex justify-center items-center mx-auto md:w-1/6 sm:w-1/2 lg:my-0 my-5">
              <p className="inline-flex text-green-600 ">
                <MdVerifiedUser
                  className="inline-blockblock mx-1"
                  color="green"
                  size={20}
                />
                Verified
              </p>
              <p className="text-blue-400 mb-5">
                <button>Write a review</button>
              </p>
              <button className="border-2 text-center  bg-black text-white w-full px-3 py-2 mb-2">
                View Profile
              </button>
              <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                Book
              </button>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex  md:flex-row flex-col justify-start items-start rounded-md my-3">
            <img
              src={barbershop1}
              alt="barber"
              className="md:w-40 lg:h-50 h-40 w-full object-cover object-center rounded-md"
            />
            <div className="md:border-r md:border-b-0 border-b  border-gray-400 md:w-1/2 w-full md:px-10 flex flex-col items-start md:my-0 mt-5">
              <h2 className="font-bold text-md mb-1">Chop Shop</h2>
              <span className="text-sm text-gray-500 font-bold">
                10 miles away
              </span>
              <p className="md:tracking-widest tracking-tighter text-sm my-1">
                8 Avenue parade, N21 2AX, London
              </p>
              <p className="text-gray-500 inline-flex mb-1">
                <span className="mr-2">5 Star</span>
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
                <AiTwotoneStar className="w-5 h-5 inline-block" color="gold" />
              </p>
              <div className="text-sm text-black md:mb-0 mb-5">
                <ul style={{ listStyleType: "disc" }}>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Skinician Skincare</li>
                    <li className="lg:mx-4 mx-3">Spray Tranning & Message</li>
                  </div>
                  <div className="flex lg:flex-row flex-col md:tracking-wider">
                    <li className="mx-3">Manicure & Pedicure</li>
                    <li className="lg:mx-4 mx-3">Wedding Makeup</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex-col flex justify-center items-center mx-auto md:w-1/6 sm:w-1/2 lg:my-0 my-5">
              <p className="inline-flex text-green-600 ">
                <MdVerifiedUser
                  className="inline-blockblock mx-1"
                  color="green"
                  size={20}
                />
                Verified
              </p>
              <p className="text-blue-400 mb-5">
                <button>Write a review</button>
              </p>
              <button className="border-2 text-center  bg-black text-white w-full px-3 py-2 mb-2">
                View Profile
              </button>
              <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                Book
              </button>
            </div>
          </div>

          {/* -----------------------------pagination------------------------------ */}
          <div className="flex flex-row justify-center items-center my-5">
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
      <Footer />
    </>
  );
};

export default Search;

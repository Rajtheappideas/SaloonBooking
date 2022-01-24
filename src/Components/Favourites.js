import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight, AiTwotoneStar } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import barbershop from "../assets/barber_shop.jpg";
import barbershop1 from "../assets/blush&blow.jpg";

const Favourites = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="bg-white w-full shadow-lg  h-auto flex-col flex justify-center p-8 rounded-md">
        <h2 className="block text-xl font-bold text-left tracking-wider py-2">
          Favourites
        </h2>
        {data.length === 1 ? (
          <h1 className="font-bold text-4xl">Oops! no Favourites </h1>
        ) : (
          <>
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
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
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
                <p className="text-blue-400 mb-2">
                  <button>Write a review</button>
                </p>
                <button className="border-2 text-center border-red-600 w-full px-3 py-2 mb-2">
                  Remove
                </button>
                <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                  Book
                </button>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex md:flex-row flex-col justify-start items-start rounded-md my-3">
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
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
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
                <p className="text-blue-400 mb-2">
                  <button>Write a review</button>
                </p>
                <button className="border-2 text-center border-red-600 w-full px-3 py-2 mb-2">
                  Remove
                </button>
                <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                  Book
                </button>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex md:flex-row flex-col justify-start items-start rounded-md my-3">
              <img
                src={barbershop1}
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
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
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
                <p className="text-blue-400 mb-2">
                  <button>Write a review</button>
                </p>
                <button className="border-2 text-center border-red-600 w-full px-3 py-2 mb-2">
                  Remove
                </button>
                <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                  Book
                </button>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-300 p-3 h-full w-full flex md:flex-row flex-col justify-start items-start rounded-md my-3">
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
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
                  <AiTwotoneStar
                    className="w-5 h-5 inline-block"
                    color="gold"
                  />
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
                <p className="text-blue-400 mb-2">
                  <button>Write a review</button>
                </p>
                <button className="border-2 text-center border-red-600 w-full px-3 py-2 mb-2">
                  Remove
                </button>
                <button className="border-2 text-center border-pink-600 bg-pink-600 text-white px-3 w-full py-2 mb-2">
                  Book
                </button>
              </div>
            </div>

            {/* ----------------------pagination---------------------- */}
            <div className="flex flex-row justify-center items-center my-5">
              <button type="button">
                <AiOutlineLeft size={25} />
              </button>
              <button
                type="button"
                className="bg-gray-100 px-3 py-1 rounded-md ml-5 mr-1"
              >
                1
              </button>
              <button
                type="button"
                className="bg-gray-100 px-3 py-1 rounded-md mx-1"
              >
                2
              </button>
              <button
                type="button"
                className="bg-gray-100 px-3 py-1 rounded-md mx-1"
              >
                3
              </button>
              <button
                type="button"
                className="bg-gray-100 px-3 py-1 rounded-md mx-1"
              >
                4
              </button>
              <button
                type="button"
                className="bg-gray-100 px-3 py-1 rounded-md mr-5 ml-1"
              >
                5
              </button>
              <button type="button">
                <AiOutlineRight size={25} />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Favourites;

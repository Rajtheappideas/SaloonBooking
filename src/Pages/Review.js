import React from "react";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../Components";
import barbershop from "../assets/barber_shop.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Review = () => {
  return (
    <>
      <MetaTags>
        <title>Reviews</title>
      </MetaTags>
      <Navbar />
      <div className="p-10">
        {/* --------------------------barbershop details------------------------- */}
        <div className="flex items-center pb-5 border-b border-gray-300">
          <img
            src={barbershop}
            alt="barbershopimg"
            className="rounded-lg object-cover object-center w-40 h-40"
          />
          <div className="mx-5">
            <h1 className="block font-bold text-2xl tracking-wide">
              Maikai Designs Ltd
            </h1>
            <p className="block tracking-wide text-gray-400">
              8 Avenue parade, N21 2AX, London
            </p>
          </div>
        </div>

        {/* -------------------------write a review-------------------------------- */}
        <div className="my-4">
          <p className="text-gray-400 block text-xl">
            How Would you rate this business?
          </p>
          <div className="flex mb-5">
            <AiTwotoneStar size={50} color="gold" className="cursor-pointer" />
            <AiTwotoneStar size={50} color="gold" className="cursor-pointer" />
            <AiTwotoneStar size={50} color="gold" className="cursor-pointer" />
            <AiTwotoneStar size={50} color="gold" className="cursor-pointer" />
            <AiTwotoneStar size={50} color="gold" className="cursor-pointer" />
          </div>
          <span className="text-base">Your review</span>
          <textarea
            rows="5"
            cols="5"
            className="w-full border border-gray- mb-4 p-2 outline-none"
            placeholder="Write your thoughts "
          />
          <div className="flex">
            <button className="bg-black text-white p-3 w-40">
              <Link to="/barbershop">Cancel</Link>
            </button>
            <button className="border p-3 w-40 ml-5">Post</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;

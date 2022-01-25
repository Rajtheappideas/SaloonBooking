import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import styled from "styled-components";
import { useTable } from "react-table";

const ReviewsAndRatings = () => {
  return (
    <>
      <div className="bg-white flex flex-col p-10 w-full shadow-lg rounded-lg">
        <h2 className="block text-2xl font-bold tracking-wide mb-3">
          Review/Ratings
        </h2>
        <div className="flex md:flex-row flex-col justify-between items-center mb-5">
          <div className="mb-3 md:mb-0">
            <span className="mx-2">Show</span>
            <input
              type="number"
              placeholder="10"
              min='1'
              max="20"
              className="w-20 mx-2 outline-none p-2 bg-gray-100 rounded-lg"
            />
            <span>entries</span>
          </div>
          <div>
            Search:{" "}
            <input
              type="text"
              className="outline-none rounded-lg bg-gray-100 text-black p-2"
            />
          </div>
        </div>
        <table className="table-auto mb-5 ">
          <thead className="text-base font-semibold border border-black border-collapse">
            <tr className="text-left bg-gray-100">
              <th className="border border-black border-collapse px-2 py-3">
                Business
              </th>
              <th className="border border-black border-collapse px-2 py-3">
                Average Rating
              </th>
              <th className="border border-black border-collapse px-2 py-3">
                Your Review
              </th>
              <th className="border border-black border-collapse px-2 py-3">
                Your Rating
              </th>
            </tr>
          </thead>
          <tbody className="border border-black border-collapse ">
            <tr className="border border-black border-collapse ">
              <td className="border border-black border-collapse  px-2 py-3">
                The Finest Barber Shop
              </td>
              <td className="border border-black border-collapse  px-2 py-3">
                5.0
              </td>
              <td className="flex justify-center mt-3">
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gray" />
              </td>
              <td className="border border-black border-collapse  px-2 py-3">
                Lorem ipsum is simply dummy
              </td>
            </tr>
            <tr>
              <td className="border border-black border-collapse  px-2 py-3">
                Barber Shop
              </td>
              <td className="border border-black border-collapse  px-2 py-3">
                4.2
              </td>
              <td className="flex justify-center mt-3">
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gray" />
                <AiTwotoneStar size={20} color="gray" />
              </td>
              <td className="border border-black border-collapse  px-2 py-3">
                Lorem ipsum is simply dummy
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" flex md:flex-row flex-col justify-between items-center">
          <p className="mb-3 md:mb-0">Showing 1 to 10 of 2 entires</p>
          <div>
            <button className="px-3 py-2 border border-gray-300 rounded-l-lg">
              Previous
            </button>
            <span className="bg-black text-white p-3 h-full">1</span>
            <button className="px-5  py-2 border border-gray-300 rounded-r-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsAndRatings;

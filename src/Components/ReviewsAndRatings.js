import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const ReviewsAndRatings = () => {
  return (
    <>
      <div className="bg-white flex flex-col p-10 w-full shadow-lg rounded-lg">
        <h2 className="block text-2xl font-bold tracking-wide mb-3">
          Review/Ratings
        </h2>
        <div className="flex flex-row justify-between items-center mb-5">
          <div>
            <span className="mx-2">Show</span>
            <input
              type="number"
              placeholder="10"
              className="w-20 mx-2 outline-none border border-black bg-gray-100 rounded-lg"
            />
            <span>entries</span>
          </div>
          <div>
            Search:{" "}
            <input
              type="text"
              className="outline-none rounded-lg bg-gray-100 border border-black text-black"
            />
          </div>
        </div>
        <table className="table-auto border-collapse border border-slate-400 mb-5">
          <thead className="text-base font-semibold ">
            <tr>
              <th className="border border-slate-300">Business</th>
              <th className="border border-slate-300">Average Rating</th>
              <th className="border border-slate-300">Your Rating</th>
              <th className="border border-slate-300">Your Review</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <td className="border border-slate-300">The Finest Barber Shop</td>
              <td className="border border-slate-300">5.0</td>
              <td className="border border-slate-300 flex">
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gray" />
              </td>
              <td className="border border-slate-300">Lorem ipsum is simply dummy</td>
            </tr>
            <tr>
              <td className="border border-slate-300">Barber Shop</td>
              <td className="border border-slate-300">4.2</td>
              <td className="border border-slate-300 flex">
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gold" />
                <AiTwotoneStar size={20} color="gray" />
                <AiTwotoneStar size={20} color="gray" />
              </td>
              <td className="border border-slate-300">Lorem ipsum is simply dummy</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between">
          <p>Showing 1 to 10 of 2 entires</p>
          <div className="text-center border border-gray-300">
            <button className="rounded-md p-3">Previous</button>
            <span className="bg-black text-white p-3">1</span>
            <button className="rounded-md">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsAndRatings;

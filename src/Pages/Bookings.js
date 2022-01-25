import React, { useState } from "react";
import { MdCancel, MdRemoveRedEye } from "react-icons/md";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../Components";
import { Modal } from "@material-ui/core";

const Bookings = () => {
  const [openBookingDetails, setopenBookingDetails] = useState(false);

  const handleOpenBookingDetails = () => setopenBookingDetails(true);
  const handleCloseBookingDetails = () => setopenBookingDetails(false);
  return (
    <>
      <MetaTags>
        <title>Bookings</title>
      </MetaTags>
      <Navbar />
      <div className="bg-gray-100 w-full p-4">
        <div className="flex justify-between items-center mb-5">
          <span className="font-bold text-2xl">Bookings</span>
          <button
            className="text-center uppercase rounded-lg
         bg-black text-white px-4 py-3 w-auto font-medium"
          >
            <Link to="/myaccount">Back to my account</Link>
          </button>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-lg w-full mb-3 p-5 ">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
            <button className="p-3 border border-black rounded-lg hover:bg-black hover:text-white w-auto">
              My Reservation
            </button>
            <button className="p-3 border  md:mx-3 my-3 md:my-0 border-black rounded-lg hover:bg-black hover:text-white w-auto">
              Past Reservation
            </button>
            <button className="p-3 border border-black rounded-lg hover:bg-black hover:text-white w-auto">
              Cancelled Reservation
            </button>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center my-5">
            <div className="mb-3 md:mb-0">
              <span className="mx-2">Show</span>
              <input
                type="number"
                placeholder="10"
                min="1"
                max="20"
                className="w-20 mx-2 outline-none p-2 bg-white rounded-lg"
              />
              <span>entries</span>
            </div>
            <div>
              Search:{" "}
              <input
                type="text"
                className="outline-none rounded-lg bg-white text-black p-2"
              />
            </div>
          </div>
          <table className="table-auto mb-5 w-full ">
            <thead className="text-base font-semibold border border-black border-collapse">
              <tr className="text-left bg-gray-200">
                <th className="border border-black border-collapse px-2 py-3">
                  Booking Date
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Bussiness
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Service
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Time Slot
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Price
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Booking On
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Pay Method
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Status
                </th>
                <th className="border border-black border-collapse px-2 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border border-black border-collapse ">
              <tr className="border border-black border-collapse bg-white ">
                <td className="border border-black border-collapse  px-2 py-3">
                  18 May 2022
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  The Finest Barber Shop
                </td>
                <td className="border border-black border-collapse px-2 py-3">
                  Skin fade
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  01:40
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  $10
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  17 May, 2022
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  To Pay in Store
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  Confirmed
                </td>
                <td className="px-2 py-3 flex mt-3 justify-center">
                  <MdCancel
                    size={20}
                    color="red"
                    className="mr-2 cursor-pointer"
                  />
                  <MdRemoveRedEye
                    size={20}
                    color="green"
                    onClick={handleOpenBookingDetails}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
              <tr className="border border-black border-collapse bg-white ">
                <td className="border border-black border-collapse  px-2 py-3">
                  19 May 2022
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  The Finest Barber Shop
                </td>
                <td className="border border-black border-collapse px-2 py-3">
                  Skin fade
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  04:40
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  $30
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  18 May, 2022
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  Pay By Card
                </td>
                <td className="border border-black border-collapse  px-2 py-3">
                  Confirmed
                </td>
                <td className="px-2 py-3 flex mt-3 justify-center">
                  <MdCancel
                    size={20}
                    color="red"
                    className="mr-2 cursor-pointer"
                  />
                  <MdRemoveRedEye
                    size={20}
                    color="green"
                    className="cursor-pointer"
                    onClick={handleOpenBookingDetails}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className=" flex md:flex-row flex-col justify-between items-center pb-5 border-b border-gray-400">
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
          <div className="flex flex-row justify-center items-center my-5">
            <p className="inline-flex mr-5">
              <MdCancel
                className="inline-block mr-2 cursor-pointer"
                color="red"
                size={25}
              />
              <span>Request Booking Cancellation</span>
            </p>
            <p className="inline-flex">
              <MdRemoveRedEye
                className="inline-block mr-2 cursor-pointer"
                color="green"
                onClick={handleOpenBookingDetails}
                size={25}
              />
              Booking Information
            </p>
          </div>
        </div>
      </div>
      <Modal open={openBookingDetails} onClose={handleCloseBookingDetails}>
        <div className="absolute  top-1/4 left-1/2 transform -translate-x-1/2 w-auto rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center p-3 bg-pink-600 w-full">
            <h2 className="font-semibold text-white"> Booking Details</h2>
            <MdCancel
              color="white"
              size={25}
              onClick={handleCloseBookingDetails}
              className="cursor-pointer"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-start p-4">
            <div className="mr-2">
              <p className="mb-2">
                <span className="font-semibold">Booking id:</span>
                <span>Rarfa@asadi</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Bussiness Name:</span>
                <span>The Finest Barber Shop</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Service:</span>
                <span>Skin fade</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Time Slot:</span>
                <span>2:40 PM-13:20 PM</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Price:</span>
                <span>$10</span>
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold">Booking Date:</span>
                <span>18 May 21</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Status:</span>
                <span>Confirmed</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Cancellation Requested:</span>
                <span>No</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Cancellation id:</span>
                <span></span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Health Condition:</span>
                <span>No Health Condition</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default Bookings;

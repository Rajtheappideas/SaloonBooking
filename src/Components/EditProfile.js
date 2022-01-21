import React from "react";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { AiOutlineCaretDown } from "react-icons/ai";

const EditProfile = () => {
  return (
    <>
      <div className="bg-white p-10 flex flex-col justify-center items-start shadow-lg rounded-lg w-full h-full">
        <h2 className="text-2xl font-bold tracking-wide my-5">Edit Profile</h2>
        <div className="relative mb-3">
          <input
            type="text"
            className=" w-80 p-3 bg-gray-100 rounded-lg pl-10 outline-none"
            placeholder="Enter name"
            name="name"
          />
          <FaUserAlt size={20} className="absolute top-3 left-3" color="gray" />
        </div>
        <div className="relative mb-3">
          <input
            type="email"
            className=" w-80 p-3 bg-gray-100 rounded-lg pl-10 outline-none"
            placeholder="Enter Email"
            name="email"
          />
          <MdEmail size={20} className="absolute top-3 left-3" color="gray" />
        </div>
        <div className="relative mb-3">
          <input
            type="number"
            className=" w-80 p-3 bg-gray-100 rounded-lg pl-10 outline-none"
            placeholder="+1"
            name="counrtycode"
          />
          <ImEarth size={20} className="absolute top-3 left-3" color="gray" />
          <AiOutlineCaretDown
            size={20}
            className="absolute top-3 right-3"
            color="gray"
          />
        </div>
        <div className="relative mb-3">
          <input
            type="tel"
            className=" w-80 p-3 bg-gray-100 rounded-lg pl-10 outline-none"
            placeholder="Enter phone number"
            name="phone"
          />
          <FaPhoneAlt
            size={20}
            className="absolute top-3 left-3"
            color="gray"
          />
        </div>
        <div className="relative mb-3">
          <textarea
            type="address"
            cols="5"
            rows="3"
            className=" w-80 p-3 bg-gray-100 rounded-lg pl-10 outline-none"
            placeholder="Enter address"
            name="address"
          />
          <MdLocationPin
            size={20}
            className="absolute top-3 left-3"
            color="gray"
          />
        </div>
        <button type="button" className="w-52 p-3 bg-black rounded-lg text-white text-center">
          Update Profile
        </button>
      </div>
    </>
  );
};

export default EditProfile;

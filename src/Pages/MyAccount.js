import React, { useState } from "react";
import { AiOutlineLock, AiOutlineStar } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdOutlinePayments } from "react-icons/md";
import { Navbar, Footer } from "../Components/index";
import { useUserContext } from "../context/user_context";
import {
  Favourites,
  EditProfile,
  ReviewsAndRatings,
  ChangePassword,
  Payment,
} from "../Components/index";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import useUserdata from "../hooks/useUserdata";
const MyAccount = () => {
  const [favouriteComponent, setFavouritesComponent] = useState(false);
  const [changePassword, setChangepassword] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [reviewsAndRatings, setReviewandrating] = useState(false);
  const [payment, setPayment] = useState(false);

  const { handleLogout } = useUserdata();
  const { userData } = useUserContext();
  const userName = userData?.yu?.qf;

  return (
    <>
      <MetaTags>
        <title>My Account</title>
      </MetaTags>
      <Navbar />
      <div className="bg-gray-100 p-5">
        <div className="flex justify-between items-center mb-10">
          <div className="font-bold text-xl uppercase">
            <p>
              hello, <span>{userName}</span>
            </p>
          </div>
          <div className="text-base text-center flex flex-row justify-center items-center">
            <button className="py-2 px-4 w-1/2 font-medium  text-black rounded-lg mr-3 uppercase border-2 border-gray-900">
              <Link to="/bookings">Bookings</Link>
            </button>
            <button
              onClick={handleLogout}
              className="py-2 px-4 w-1/2 bg-red-600 text-white rounded-lg uppercase border-2 border-red-600"
            >
              logout
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-around lg:items-start items-center">
          {/* -------------------list------------------- */}
          <div className="py-3 mx-3 flex flex-col justify-center items-center">
            <ul>
              <li className="mb-2">
                <button
                  className="inline-flex items-center md:w-48 px-3 py-2 font-medium rounded leading-5 text-primary-100 text-black active:bg-pink-200 hover:bg-pink-200 hover:text-pink-600"
                  onClick={() => {
                    // setFavouritesComponent((prev) => !prev);
                    setFavouritesComponent(true);
                  }}
                >
                  <MdOutlineFavoriteBorder
                    className="inline-block mr-2 "
                    size={20}
                  />
                  Favourites
                </button>{" "}
              </li>
              <li className="mb-2">
                <button
                  className="inline-flex items-center md:w-48 px-3 py-2 font-medium rounded leading-5 text-primary-100 text-black hover:bg-pink-200 hover:text-pink-600"
                  onClick={() => {
                    // setEditProfile((prev) => !prev);
                    setEditProfile(true);
                  }}
                >
                  <FaUserEdit className="inline-block mr-2" size={20} />
                  Edit Profile
                </button>{" "}
              </li>
              <li className="mb-2">
                <button
                  className="inline-flex items-center md:w-48 px-3 py-2 font-medium rounded leading-5 text-primary-100 text-black hover:bg-pink-200 hover:text-pink-600"
                  onClick={() => {
                    // setReviewandrating((prev) => !prev);
                    setReviewandrating(true);
                  }}
                >
                  {" "}
                  <AiOutlineStar className="inline-block mr-2" size={20} />
                  Reviews/Ratings
                </button>{" "}
              </li>
              <li className="mb-2">
                <button
                  className="inline-flex items-center md:w-48 px-3 py-2 font-medium rounded leading-5 text-primary-100 text-black hover:bg-pink-200 hover:text-pink-600"
                  onClick={() => {
                    // setPayment((prev) => !prev);
                    setPayment(true);
                  }}
                >
                  {" "}
                  <MdOutlinePayments className="inline-block mr-2" size={20} />
                  Payments
                </button>{" "}
              </li>
              <li className="mb-2">
                <button
                  className="inline-flex items-center md:w-48 px-3 py-2 font-medium rounded leading-5 text-primary-100 text-black hover:bg-pink-200 hover:text-pink-600"
                  onClick={() => {
                    // setChangepassword((prev) => !prev);
                    setChangepassword(true);
                  }}
                >
                  {" "}
                  <AiOutlineLock className="inline-block mr-2" size={20} />
                  Change Password
                </button>{" "}
              </li>
            </ul>
          </div>
          {favouriteComponent ? <Favourites /> : null}
          {editProfile ? <EditProfile /> : null}
          {reviewsAndRatings ? <ReviewsAndRatings /> : null}
          {payment ? <Payment /> : null}
          {changePassword ? <ChangePassword /> : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;

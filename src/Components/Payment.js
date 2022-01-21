import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import PaymentAccordian from "../Components/PaymentAccordian";

const Payment = () => {
  const { userData } = useUserContext();
  const userName = userData?.yu?.qf;
  return (
    <>
      <div className="bg-white p-10 w-full rounded-lg shadow-lg flex flex-col ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-wide">Payments</h2>
          <button className="text-center p-3 rounded-md w-auto bg-black text-white">
            Add Payment option
          </button>
        </div>
        <h2 className="text-xl font-semibold block tracking-wide mb-3">
          Payment options
        </h2>
        <div className="border-b border-gray-300 my-3 pb-5">
          <div className="bg-gray-100  py-4 px-3 flex md:flex-row flex-col justify-around rounded-lg w-full h-full mb-4">
            <div className="tracking-wide relative px-5 font-semibold flex md:border-r border-gray-300 md:border-b-0 border-b">
              <img
                src="https://img.icons8.com/fluency/96/000000/paypal.png"
                alt="paypal"
              />
              <p className="block px-5">
                John Linken
                {/* <p>{userName}</p> */}
                <span className="block"> J**********n.co.uk</span>
              </p>
              {/* <VerticalLine /> */}
            </div>

            <div className="flex-col flex px-10 md:w-1/2 w-full mx-auto md:items-end items-center">
              <button className="text-center w-1/2 bg-red-600 block text-white p-3 my-3">
                Remove
              </button>
              <button className="text-center w-1/2  bg-green-600 block text-white p-3">
                Edit
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-4 px-3 flex md:flex-row flex-col justify-between rounded-lg w-full h-full mb-4 ">
            <div className=" px-5 flex md:border-r border-gray-300 md:border-b-0 border-b">
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/96/000000/external-credit-card-ecommerce-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                alt="creadit card pic"
              />
              <div className="px-5">
                <span className="block font-semibold">John Linken</span>
                {/* <p>{userName}</p> */}
                <span className="block">**** **** **** 1234</span>
                <p className="inline-block"> Exp. Date: 12/2028</p>
              </div>
            </div>
            <div className="flex-col flex px-10 md:w-1/2 w-full mx-auto md:items-end items-center">
              <button className="text-center w-1/2 bg-red-600 block text-white p-3 my-3">
                Remove
              </button>
              <button className="text-center w-1/2  bg-green-600 block text-white p-3">
                Edit
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-4 px-3 flex md:flex-row flex-col justify-between rounded-lg w-full h-full mb-4">
            <div className=" px-5 flex md:border-r border-gray-300 md:border-b-0 border-b">
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/96/000000/external-credit-card-ecommerce-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                alt="creadit card pic"
              />
              <div className="px-5">
                <span className="block font-semibold">John Linken</span>
                {/* <p>{userName}</p> */}
                <span className="block">**** **** **** 1234</span>
                <p className="inline-block"> Exp. Date: 12/2028</p>
              </div>
            </div>
            <div className="flex-col flex px-10 md:w-1/2 w-full mx-auto md:items-end items-center">
              <button className="text-center w-1/2 bg-red-600 block text-white p-3 my-3">
                Remove
              </button>
              <button className="text-center w-1/2  bg-green-600 block text-white p-3">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 flex-col flex">
          <h2 className="text-xl font-semibold tracking-wider">History</h2>
          <div className="flex justify-between border border-gray-300 p-2 mt-3">
            <PaymentAccordian />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

// const VerticalLine = styled.p`
//   position: absolute;
//   background-color: red;
//   height: auto;
//   width: 20px;
//   top: 50%;
//   left: 50%;
// `;

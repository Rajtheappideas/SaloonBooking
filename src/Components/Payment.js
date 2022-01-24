import React, { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import PaymentAccordian from "../Components/PaymentAccordian";
import { v4 } from "uuid";
import { Box, Modal } from "@material-ui/core";
import { MdCancel } from "react-icons/md";
import { FaPaypal, FaRegCreditCard } from "react-icons/fa";

const data = [
  {
    paidto: "Finest Barber Shop",
    amount: "120",
    by: "Card",
    // date:
    paidusing: "Credit Card",
    orderid: v4(),
  },
  {
    paidto: "Barber Shop",
    amount: "230",
    by: "Card",
    // date:
    paidusing: "Debit Card",
    orderid: v4(),
  },
  {
    paidto: "Barber Shop",
    amount: "400",
    by: "Card",
    // date:
    paidusing: "Debit Card",
    orderid: v4(),
  },
  {
    paidto: "Barber Shop",
    amount: "130",
    by: "Card",
    // date:
    paidusing: "Debit Card",
    orderid: v4(),
  },
];
const Payment = () => {
  const [openAddCardModel, setOpenAddCardModel] = useState(false);
  const [openAddPaymentoption, setOpenAddPaymentoption] = useState(false);
  const [addCard, setAddCard] = useState([1]);
  // const { userData } = useUserContext();
  // const userName = userData?.yu?.qf;

  // -------------------------add card modal-------------------------
  const handleOpenAddCard = () => setOpenAddCardModel(true);
  const handleCloseAddCard = () => setOpenAddCardModel(false);

  // -------------------------add card modal-------------------------
  const handleOpenAddpaymentoption = () => setOpenAddPaymentoption(true);
  const handleCloseAddpaymentoption = () => setOpenAddPaymentoption(false);
  return (
    <>
      <div className="bg-white p-10 w-full rounded-lg shadow-lg flex flex-col ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-wide">Payments</h2>
          <button
            onClick={handleOpenAddpaymentoption}
            className="text-center p-3 rounded-md w-auto bg-black text-white"
          >
            Add Payment option
          </button>
          <Modal
            open={openAddPaymentoption}
            onClose={handleCloseAddpaymentoption}
          >
            <Box className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[400px]  bg-white rounded-lg shadow-lg">
              <p className="flex justify-between mb-5 bg-pink-600 w-full  text-white items-center p-3">
                <span className="font-bold">Add Card</span>
                <span
                  className="cursor-pointer "
                  onClick={handleCloseAddpaymentoption}
                >
                  <MdCancel color="white" size={25} />
                </span>
              </p>
              <div className="p-3 flex flex-col items-start justify-center mb-10">
                <div className="flex mb-3">
                  <input type="radio" name="paymentoption" className="mr-3" />
                  <FaPaypal size={30} color="blue" className="mr-3" />
                  <span className="font-bold text-lg">Paypal</span>
                </div>
                <div className="flex">
                  <input type="radio" name="paymentoption" className="mr-3" />
                  <FaRegCreditCard size={30} color="black" className="mr-3" />
                  <span className="font-bold text-lg">Credit Card</span>
                </div>
              </div>
              <button className="text-center m-3  bg-black rounded-lg text-white p-3 w-11/12">
                Continue
              </button>
            </Box>
          </Modal>
        </div>
        <h2 className="text-xl font-semibold block tracking-wide mb-3">
          Payment options
        </h2>
        <div className="border-b border-gray-300 my-3 pb-5">
          {addCard.length === 0 ? (
            <div className="text-center">
              <button
                onClick={handleOpenAddCard}
                className="w-1/2 bg-black text-white p-3 rounded-lg text-center"
              >
                Add Card
              </button>
              <Modal open={openAddCardModel} onClose={handleCloseAddCard}>
                <Box className="absolute top-1/3 left-1/2  transform -translate-x-1/2 w-96 bg-white rounded-lg shadow-lg">
                  <p className="flex justify-between mb-5 bg-pink-600 w-full  text-white items-center p-3">
                    <span className="font-bold">Add Card</span>
                    <span
                      className="cursor-pointer "
                      onClick={handleCloseAddCard}
                    >
                      <MdCancel color="white" size={25} />
                    </span>
                  </p>
                  <div className="p-3">
                    <label className="font-semibold">Cardholder's Name:</label>
                    <input
                      type="text"
                      className="w-full p-2 bg-gray-100 outline-none mb-2"
                      placeholder="Enter Cardholder Name"
                    />
                    <label className="font-semibold">Card Number:</label>
                    <input
                      type="number"
                      placeholder="Enter Card Number"
                      className="w-full p-2 bg-gray-100 outline-none mb-2"
                    />
                    <div className="flex flex-row mb-2.5">
                      <div>
                        <label className="font-semibold">Expiry Date:</label>
                        <input
                          type="date"
                          className="w-40 p-2 bg-gray-100 outline-none "
                        />
                      </div>
                      <div>
                        <label className="font-semibold">CVV:</label>
                        <input
                          type="number"
                          className="w-40 p-2 bg-gray-100 outline-none "
                        />{" "}
                      </div>
                    </div>
                    <button className="text-center bg-black rounded-lg text-white p-3 w-full">
                      ADD
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="my-3 flex-col flex">
          <h2 className="text-xl font-semibold tracking-wider">History</h2>
          <div className="border border-gray-300 mt-3">
            {data.map((item) => (
              <PaymentAccordian {...item} key={item.orderid} />
            ))}
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

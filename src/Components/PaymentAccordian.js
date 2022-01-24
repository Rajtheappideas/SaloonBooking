import React, { Fragment, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const PaymentAccordian = ({ paidto, orderid, by, paidusing, amount }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ------------------cuurentdateandtime ist-----------------------------
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  );

  return (
    <Fragment>
      <div className="border-b border-gray-200 w-full">
        <div className="flex justify-between p-3">
          <div>
            <p >
              <span className="text-gray-500 font-thin">Paid To</span> <span className="font-bold">{paidto}</span>
            </p>
            <span>By {by}</span>
            <p>{`${ISTTime}`}</p>
          </div>
          <div className="flex items-center">
            <span className="text-red-500 mr-2 font-semibold">-${amount}</span>
            {isOpen ? (
              <BsChevronUp
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            ) : (
              <BsChevronDown
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            )}
          </div>
        </div>
        {isOpen ? (
          <div className="p-2 bg-gray-100">
            <p className="font-semibold">
              Paid Using
              <span className="text-red-400 ml-5">{paidusing}</span>
            </p>
            <p className="font-semibold">
              Order ID
              <span className="text-red-400 ml-9">{orderid}</span>
            </p>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default PaymentAccordian;
